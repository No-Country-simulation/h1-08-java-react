package io.hackathon.justina.mail.controllers;

import io.hackathon.justina.mail.services.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/email")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    public ResponseEntity<String> sendEmail(String to, String subject, String email) {
        emailService.sendEmail(to, subject, email);
        return ResponseEntity.ok("Email sent successfully");
    }

}
