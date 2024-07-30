package io.hackathon.justina.exception;

import io.hackathon.justina.exception.custom.ErrorResponse;
import io.hackathon.justina.exception.custom.ErrorValidationResponse;
import io.hackathon.justina.exception.custom.ValidationError;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorValidationResponse> customValidationErrorHandling(MethodArgumentNotValidException exception) {
        List<ValidationError> errors = new ArrayList<>();

        exception.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.add(new ValidationError(fieldName, errorMessage));
        });

        ErrorValidationResponse errorResponse = new ErrorValidationResponse(errors);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        String message = e.getCause().getMessage();

        if (message.contains("could not execute statement [Cannot add or update a child row")) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST, "Se intento utilizar un id inexistente"), HttpStatus.BAD_REQUEST);
        }

        if (message.contains("Duplicate entry")) {
            String split = message.split(" ")[6];
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.CONFLICT, "El registro ya existe: " + split), HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST, "Error en la integridad de los datos", e.getCause().getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler({BadCredentialsException.class})
    public ResponseEntity<ErrorResponse> handleBadCredentialsException(BadCredentialsException e) {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNAUTHORIZED, "Contraseña incorrectas"), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({Exception.class, RuntimeException.class})
    public ResponseEntity<ErrorResponse> handleException(Exception e) {

        if (e instanceof AuthenticationCredentialsNotFoundException) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNAUTHORIZED, e.getMessage(), e.getCause().getMessage()), HttpStatus.UNAUTHORIZED);
        }

        if (e.getMessage().contains("Access Denied")) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.FORBIDDEN, "Acceso denegado, no posees los permisos necesarios.", e.getMessage()), HttpStatus.FORBIDDEN);
        }

        if (e.getCause() != null) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e.getCause().getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
