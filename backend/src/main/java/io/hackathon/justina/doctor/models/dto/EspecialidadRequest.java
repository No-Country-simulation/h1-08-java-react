package io.hackathon.justina.doctor.models.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EspecialidadRequest {

    @NotNull(message = "El id de la especialidad es obligatorio")
    @Min(value = 1, message = "La especialidad no puede ser menor a 1")
    private Integer id;

}
