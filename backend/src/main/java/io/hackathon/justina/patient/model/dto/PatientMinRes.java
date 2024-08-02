package io.hackathon.justina.patient.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PatientMinRes {

    private Long id;

    private String dni;

    private String name;

    private String lastName;

}
