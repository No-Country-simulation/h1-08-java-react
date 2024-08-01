package io.hackathon.justina.healthPlan.models.dto;

import io.hackathon.justina.utils.Enums.TypeHealth;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HealthPlanDTO {

    @NotBlank(message = "La Prepaga/obra social es obligatoria")
    @Size(min = 5, max = 70, message = "La Prepaga/obra social debe tener entre 5 y 70 caracteres")
    private String name;

    @NotBlank(message = "El tipo de prepaga/obra social es obligatorio")
    private TypeHealth typeHealth;

    @NotBlank(message = "El número de afiliado es obligatorio")
    @Size(min = 3, max = 10, message = "El número de afiliado debe tener entre 3 y 10 caracteres")
    private Number numAffiliate;

    @NotBlank(message = "El plan es obligatorio")
    @Size(min = 3, max = 10, message = "El plan debe tener entre 3 y 10 caracteres")
    private String plan;
}
