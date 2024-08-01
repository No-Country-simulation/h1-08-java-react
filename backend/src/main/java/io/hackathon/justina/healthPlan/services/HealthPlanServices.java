package io.hackathon.justina.healthPlan.services;

import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class HealthPlanServices implements IBaseCRUDServices<HealthPlanDTO, HealthPlan> {
    @Override
    public Page<HealthPlanDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public HealthPlanDTO findById(Long id) {
        return null;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public HealthPlanDTO save(HealthPlan entity) {
        return null;
    }

    @Override
    public HealthPlanDTO update(HealthPlan entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

}
