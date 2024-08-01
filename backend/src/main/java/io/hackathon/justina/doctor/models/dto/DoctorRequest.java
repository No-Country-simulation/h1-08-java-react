package io.hackathon.justina.doctor.models.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DoctorRequest {

    @NotBlank(message = "La especialidad es obligatorio")
    private EspecialidadRequest speciality;

    @NotNull(message = "la matricula es obligatoria")
    @Min(value = 1000, message = "La matricula debe de tener al menos 4 dígitos")
    @Max(value = 999999, message = "La matricula puede tener hasta 6 dígitos")
    private Integer licenseNumber;

}
