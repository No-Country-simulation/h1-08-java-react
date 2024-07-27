package io.hackathon.justina.auth.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDoctorRequest {

    @NotBlank(message = "la matricula es obligatoria")
    private Integer licenseNumber;

    @NotBlank(message = "la contrasenya es obligatoria")
    @Size(min = 8, max = 100, message = "La contraseña debe tener entre 8 y 100 dígitos")
    private String password;
}
