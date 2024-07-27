package io.hackathon.justina.exception.custom;

import lombok.Getter;

@Getter
public class ValidationError {
    private String fieldName;
    private String message;

    public ValidationError(String fieldName, String message) {
        this.fieldName = fieldName;
        this.message = message;
    }

}
