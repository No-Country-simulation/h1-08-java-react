package io.hackathon.justina.auth.models.dto.request;

import io.hackathon.justina.address.models.dto.AddressRequest;
import io.hackathon.justina.patient.model.dto.PatientRequest;
import io.hackathon.justina.utils.Genders;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterPatientRequest {

    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 3, max = 20, message = "El nombre no puede tener más de 20 caracteres")
    @Pattern(
            regexp = "^[a-zA-Z ´¨'\\-ñÑ]+$",
            message = "El nombre solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ"
    )
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Size(min = 3, max = 20, message = "El apellido no puede tener más de 20 caracteres")
    @Pattern(
            regexp = "^[a-zA-Z ´¨'\\-ñÑ]+$",
            message = "El apellido solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ"
    )
    private String apellido;

    @NotBlank(message = "El dni es obligatorio")
    @Size(min = 8, max = 8, message = "El dni debe tener 8 dígitos")
    private String dni;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El email debe ser válido")
    private String email;

    @NotNull(message = "La dirección es obligatoria")
    private AddressRequest address;

    @NotBlank(message = "La fecha de nacimiento es obligatoria")
    @NotNull(message = "La fecha de nacimiento no puede ser nula")
    @Past(message = "La fecha de nacimiento debe ser una fecha pasada")
    private LocalDate fechaNacimiento;

    @NotBlank(message = "El teléfono es obligatorio")
    @Size(min = 10, max = 15, message = "El teléfono debe tener entre 10 y 15 dígitos")
    private String telefono;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, max = 100, message = "La contraseña debe tener entre 8 y 100 dígitos")
    private String password;

}
