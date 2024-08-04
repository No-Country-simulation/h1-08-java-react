package io.hackathon.justina.patient.model.dto;

import io.hackathon.justina.address.models.dto.AddressRequest;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
import io.hackathon.justina.utils.Enums.Genders;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@Builder
public class PatientRequest {

    @Pattern(regexp = "^[a-zA-Z ´¨'\\-ñÑüÜáéíóú]+$", message = "El nombre solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ")
    private String name;

    @Pattern(regexp = "^[a-zA-Z ´¨'\\-ñÑüÜáéíóú]+$", message = "El apellido solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ")
    private String lastName;

    @Size(min = 8, max = 8, message = "El dni debe tener 8 dígitos")
    private String dni;

    @Email(message = "El email debe ser válido")
    private String email;

    private AddressRequest address;

    @Past(message = "La fecha de nacimiento debe ser una fecha pasada")
    private LocalDate birthdate;

    @Pattern(regexp = "[0-9]+", message = "El telfoon solo debe contener dígitos")
    private String phoneNumber;

    @Size(max = 3, message = "El tipo de sangre no puede tener más de 3 caracteres")
    @Pattern(regexp = "^[aboABO][+-]$")
    private String bloodType;

    private Genders gender;

    @Min(value = 0, message = "La altura no puede ser negativo")
    private double height;

    @Min(value = 0, message = "El peso no puede ser negativo")
    private double weight;

    private HealthPlanDTO healthPlan;


}
