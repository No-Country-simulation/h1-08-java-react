package io.hackathon.justina.exception.custom;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ErrorResponse {
    private HttpStatus status;

    private String message;

    private String details;

    public ErrorResponse(String message) {
        this.message = message;
    }

    public ErrorResponse(HttpStatus status, String message) {
        this(message);
        this.status = status;
    }

    public ErrorResponse(HttpStatus status, String message, String details) {
        this(status, message);
        this.details = details;
    }
}
