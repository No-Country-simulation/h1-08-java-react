package io.hackathon.justina.patient.model.dto;

import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
import io.hackathon.justina.utils.Enums.Genders;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class PatientRequest extends RegisterPatientRequest {

    @Size(max = 3, message = "El tipo de sangre no puede tener más de 3 caracteres")
    @Pattern(regexp = "^[aboABO][+-]$")
    private String bloodType;

    @NotBlank(message = "El genero es obligatorio")
    @Size(max = 10, message = "El genero no puede tener más de 10 caracteres")
    private Genders gender;

    @NotBlank(message = "La altura es obligatoria")
    @Size(min = 0, message = "La altura no puede ser negativa")
    @Pattern(regexp = "^\\d+(\\.\\d+)?$", message = "La altura debe ser un numero")
    private double height;

    @NotBlank(message = "El peso es obligatorio")
    @Min(value = 0, message = "El peso no puede ser negativo")
    @Pattern(regexp = "^\\d+(\\.\\d+)?$", message = "El peso debe ser un numero")
    private double weight;

    @NotBlank(message = "El plan de salud es obligatorio")
    private HealthPlanDTO healthPlan;

}
