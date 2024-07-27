package io.hackathon.justina.exception.custom;

import lombok.Data;

import java.util.List;

@Data
public class ErrorValidationResponse {

    private List<ValidationError> errors;

    public ErrorValidationResponse(List<ValidationError> errors) {
        this.errors = errors;
    }
}