package io.hackathon.justina.exception;

public class PatientNotFoundException extends RuntimeException {

    public  PatientNotFoundException(String message){
        super(message);
    }
}
