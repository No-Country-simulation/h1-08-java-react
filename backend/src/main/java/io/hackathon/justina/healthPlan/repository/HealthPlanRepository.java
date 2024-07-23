package io.hackathon.justina.healthPlan.repository;

import io.hackathon.justina.healthPlan.models.HealthPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthPlanRepository extends JpaRepository<HealthPlan, Long> {
}
