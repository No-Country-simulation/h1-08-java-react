package io.hackathon.justina.auth.controller;

import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.auth.AuthResponseRegister;
import io.hackathon.justina.auth.models.dto.request.LoginDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.auth.services.AuthService;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.patient.model.Patient;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login/patient")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        AuthResponseRegister<Patient> response = authService.<Patient, LoginRequest>login(request, Patient.class);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login/doctor")
    public ResponseEntity<?> loginDoctor(@Valid @RequestBody LoginDoctorRequest request) {
        try {
            AuthResponseRegister<Medico> response = authService.<Medico, LoginDoctorRequest>login(request, Medico.class);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register/patient")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterPatientRequest request) {
        return ResponseEntity.ok(authService.createPatient(request));
    }

    @PostMapping("/register/doctor")
    public ResponseEntity<AuthResponse> registerDoctor(@Valid @RequestBody RegisterDoctorRequest request) {
        try {
            return ResponseEntity.ok(authService.createDoctor(request));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
