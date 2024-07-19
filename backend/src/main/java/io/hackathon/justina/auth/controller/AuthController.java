package io.hackathon.justina.auth.controller;

import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterRequest;
import io.hackathon.justina.auth.services.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private  final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest request) {
       try {
           System.out.println(request);
           return ResponseEntity.ok(authService.login(request));
       } catch (Exception e) {
           return ResponseEntity.badRequest().body(e.getMessage());
       }
    }
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody @Valid RegisterRequest request) {
        try {
            return ResponseEntity.ok(authService.register(request));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
