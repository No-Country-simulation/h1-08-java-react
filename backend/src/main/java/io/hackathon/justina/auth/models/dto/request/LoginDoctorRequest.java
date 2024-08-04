package io.hackathon.justina.auth.models.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDoctorRequest {

    @NotBlank(message = "la matricula es obligatorio")
    @Size(min = 4, max = 6, message = "la matricula debe tener entre 4 y 6 dígitos")
    @Pattern(regexp = "[0-9]+", message = "la matricula solo debe contener dígitos")
    private String licenseNumber;

    @NotBlank(message = "la contrasenya es obligatoria")
    @Size(min = 8, max = 100, message = "La contraseña debe tener entre 8 y 100 dígitos")
    private String password;
}
