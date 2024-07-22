package io.hackathon.justina.auth.models.dto.request;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.doctor.models.dto.DoctorRequest;
import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
import io.hackathon.justina.patient.model.dto.PatientRequest;
import io.hackathon.justina.utils.Role;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDoctorRequest {

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
    private AddressDTO address;

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

    @NotNull(message = "El doctor es obligatorio")
    private DoctorRequest doctor;

    @NotBlank(message = "El plan de salud es obligatorio")
    private HealthPlanDTO healthPlan;

}
