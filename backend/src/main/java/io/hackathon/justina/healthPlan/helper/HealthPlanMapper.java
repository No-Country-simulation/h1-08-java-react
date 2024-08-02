package io.hackathon.justina.healthPlan.helper;

import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;

public class HealthPlanMapper {

    public static HealthPlan toHealthPlan(HealthPlanDTO healthPlan) {
        return HealthPlan.builder()
                .name(healthPlan.getName().trim())
                .typeHealth(healthPlan.getTypeHealth())
                .numAffiliate(healthPlan.getNumAffiliate())
                .plan(healthPlan.getPlan().trim())
                .build();
    }
}
