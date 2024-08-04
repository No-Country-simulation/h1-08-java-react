package io.hackathon.justina.doctor.models.dto;
import jakarta.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class DoctorRequest {

    private EspecialidadRequest speciality;

}
