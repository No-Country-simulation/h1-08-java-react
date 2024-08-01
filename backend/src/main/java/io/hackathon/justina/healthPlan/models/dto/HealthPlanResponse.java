package io.hackathon.justina.healthPlan.models.dto;

import io.hackathon.justina.utils.Enums.TypeHealth;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HealthPlanResponse {

    private Long id;

    private String name;

    private TypeHealth typeHealth;

    private Number numAffiliate;

    private String plan;
}
