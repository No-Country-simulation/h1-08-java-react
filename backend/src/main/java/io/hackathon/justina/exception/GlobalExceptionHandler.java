package io.hackathon.justina.exception;

import io.hackathon.justina.exception.custom.ErrorResponse;
import io.hackathon.justina.exception.custom.ErrorValidationResponse;
import io.hackathon.justina.exception.custom.ValidationError;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.security.NoSuchAlgorithmException;
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
        Throwable cause = e.getCause();

        String message = (cause != null && cause.getMessage() != null) ? cause.getMessage() : e.getMessage();

        if (message != null && message.contains("could not execute statement [Cannot add or update a child row")) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST, "Se intentó utilizar un id inexistente"), HttpStatus.BAD_REQUEST);
        }

        if (message != null && message.contains("Duplicate entry")) {
            String split = message.split(" ")[6];
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.CONFLICT, "El registro ya existe: " + split), HttpStatus.CONFLICT);
        }

        return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST, "Error en la integridad de los datos", message), HttpStatus.BAD_REQUEST);
    }


    @ExceptionHandler({BadCredentialsException.class})
    public ResponseEntity<ErrorResponse> handleBadCredentialsException(BadCredentialsException e) {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNAUTHORIZED, "Contraseña incorrectas"), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(EmptyResultDataAccessException.class)
    public ResponseEntity<ErrorResponse> handleEmptyResultDataAccessException(EmptyResultDataAccessException e) {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.NOT_FOUND, e.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(NoSuchAlgorithmException.class)
    public ResponseEntity<ErrorResponse> handleNoSuchAlgorithmException(MethodArgumentNotValidException e) {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, "Error al generar el hash: Algoritmo de Signature no encontrado."), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUsernameNotFoundException(UsernameNotFoundException e) {
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.NOT_FOUND, e.getMessage()), HttpStatus.NOT_FOUND);
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
