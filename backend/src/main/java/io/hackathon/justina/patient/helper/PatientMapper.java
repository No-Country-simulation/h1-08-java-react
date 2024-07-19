package io.hackathon.justina.patient.helper;

import io.hackathon.justina.auth.models.dto.request.RegisterRequest;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.utils.Role;

public class PatientMapper {
    public static Patient toPatient(RegisterRequest request) {
        return Patient.builder()
                .id(request.getId())
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .telefono(request.getTelefono())
                .role(Role.PATIENT)
                .email(request.getEmail())
                .password(request.getPassword())
                .dni(request.getPatient().getDni())
                .build();
    }

    public static PatientDTO toPatientDTO(Patient patient) {
        return PatientDTO.builder()
                .id(patient.getId())
                .dni(patient.getDni())
                .nombre(patient.getNombre())
                .apellido(patient.getApellido())
                .email(patient.getEmail())
                .telefono(patient.getTelefono())
                .role(patient.getRole())
                .build();
    }
}
