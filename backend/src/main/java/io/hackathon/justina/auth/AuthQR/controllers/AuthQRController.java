package io.hackathon.justina.auth.AuthQR.controllers;

import io.hackathon.justina.auth.AuthQR.helper.QrMapper;
import io.hackathon.justina.auth.AuthQR.model.QrModel;
import io.hackathon.justina.auth.AuthQR.model.dto.request.QRRequest;
import io.hackathon.justina.auth.AuthQR.model.dto.request.QrRequestValid;
import io.hackathon.justina.auth.AuthQR.model.dto.response.QRResponse;
import io.hackathon.justina.auth.AuthQR.services.QrServices;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/auth/qr")
@RequiredArgsConstructor
public class AuthQRController {

    private final QrServices qrServices;
    private final PatientServicesImp patientServicesImp;

    @PostMapping()
    @PreAuthorize("hasRole('PATIENT')")
    public ResponseEntity<QRResponse> generateQr(@Valid @RequestBody QRRequest qr) throws NoSuchAlgorithmException {
        Optional<QrModel> qrModel = qrServices.createQrForPatient(qr.getId());
        if (qrModel.isPresent()) {
            return new ResponseEntity<>(QrMapper.toQRResponse(qrModel.get()), HttpStatus.OK);
        } else {
            throw new UsernameNotFoundException("El paciente no existe");
        }

    }

    @PostMapping("/validate")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<?> validateQr(@Valid @RequestBody QrRequestValid qr) {
        Optional<QrModel> qrModel = qrServices.validateQr(qr.getToken());
        if (qrModel.isPresent()) {
            QrModel qrModel1 = qrModel.get();

            Patient patient = patientServicesImp.updateListDoctor(qrModel1.getDni(), qr.getDoctorId());

            return new ResponseEntity<>(PatientMapper.toPatientMinRes(patient), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("El token es inválido o ha expirado", HttpStatus.UNAUTHORIZED);
        }
    }


}
