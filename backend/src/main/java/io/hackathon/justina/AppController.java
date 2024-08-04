package io.hackathon.justina;

import io.hackathon.justina.exception.custom.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AppController {
    @GetMapping("/coffee")
    public ResponseEntity<ErrorResponse> coffe() {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.I_AM_A_TEAPOT, "Lo siento no puedo preparate tu cafe", "Por que soy una tetera"), HttpStatus.I_AM_A_TEAPOT);
    }
}
