package io.hackathon.justina.healthPlan.models.dto;

import jakarta.validation.constraints.Size;

public class HealthPlanDTO {

    @Size(min = 5, max = 70, message = "La Prepaga/obra social debe tener entre 5 y 70 caracteres")
    private String name;
    @Size(min = 3, max = 10, message = "El plan debe tener entre 3 y 10 caracteres")
    private String plan;
}
