package io.hackathon.justina.auth.models.dto.request;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDoctorRequest {

    @NotNull(message = "la matricula es obligatoria")
    @Min(value = 1000, message = "La matricula debe de tener al menos 4 dígitos")
    @Max(value = 999999, message = "La matricula puede tener hasta 6 dígitos")
    private Integer licenseNumber;

    @NotBlank(message = "la contrasenya es obligatoria")
    @Size(min = 8, max = 100, message = "La contraseña debe tener entre 8 y 100 dígitos")
    private String password;
}
