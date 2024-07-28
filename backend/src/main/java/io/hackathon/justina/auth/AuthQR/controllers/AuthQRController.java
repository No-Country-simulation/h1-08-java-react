package io.hackathon.justina.auth.AuthQR.controllers;

import io.hackathon.justina.auth.AuthQR.model.dto.request.QRResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth/qr")
public class AuthQRController {

    @PostMapping()
    public ResponseEntity<QRResponse> generateQr(@Valid @RequestBody QRRequest qr) {
        return new ResponseEntity<>(QRResponse.builder().build(), null, null);
    }

    @PostMapping("/validate")
    public ResponseEntity<QRResponse> validateQr(@Valid @RequestBody QRRequest qr) {
        return new ResponseEntity<>(QRResponse.builder().build(), null, null);
    }

}
