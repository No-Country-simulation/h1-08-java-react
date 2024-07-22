package io.hackathon.justina.auth.controller;

import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.auth.services.AuthService;
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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest request) {
        try {
            return ResponseEntity.ok(authService.login(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register/patient")
    public ResponseEntity<AuthResponse> register(@RequestBody @Valid RegisterPatientRequest request) {
        try {
            return ResponseEntity.ok(authService.createPatient(request));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/register/doctor")
    public ResponseEntity<AuthResponse> registerDoctor(@RequestBody @Valid RegisterDoctorRequest request) {
        try {
            return ResponseEntity.ok(authService.createDoctor(request));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
