package io.hackathon.justina.doctor.models.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EspecialidadRequest {

    @NotBlank(message = "La especialidad es obligatoria")
    @Min(value = 1, message = "La especialidad no puede ser menor a 1")
    private Integer id;

}
