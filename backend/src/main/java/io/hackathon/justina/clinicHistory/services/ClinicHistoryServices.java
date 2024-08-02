package io.hackathon.justina.clinicHistory.services;

import io.hackathon.justina.clinicHistory.helper.ClinicHistoryMapper;
import io.hackathon.justina.clinicHistory.model.ClinicHistory;
import io.hackathon.justina.clinicHistory.model.dto.request.ClinicHistoryReq;
import io.hackathon.justina.clinicHistory.model.dto.response.ClinicHistoryRes;
import io.hackathon.justina.clinicHistory.repository.ClinicHistoryRepository;
import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.pathologies.services.PathologiesServices;
import io.hackathon.justina.treatment.model.Treatment;
import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.treatment.services.PrescriptionService;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClinicHistoryServices implements IBaseCRUDServices<ClinicHistoryRes, ClinicHistoryReq> {

    private final ClinicHistoryRepository clinicHistoryRepository;
    private final PrescriptionService prescriptionService;
    private final PathologiesServices pathologiesServices;

    @Override
    public Page<ClinicHistoryRes> findAll(Pageable pageable) {
        return clinicHistoryRepository.findAll(pageable).map(ClinicHistoryMapper::toResponse);
    }

    @Override
    public ClinicHistoryRes findById(Long id) {
        return ClinicHistoryMapper.toResponse(clinicHistoryRepository.findById(id).orElse(null));
    }

    public Page<ClinicHistoryRes> findAllByPatientId(Long id, Pageable pageable) {
        return clinicHistoryRepository.findByPatientId(id, pageable).map(ClinicHistoryMapper::toResponse);
    }

    @Override
    public boolean existsById(Long id) {
        return clinicHistoryRepository.existsById(id);
    }

    @Override
    public ClinicHistoryRes save(ClinicHistoryReq entity) {
        ClinicHistory clinicHistory = ClinicHistoryMapper.toClinicHistory(entity);
        Treatment treatment = clinicHistory.getTreatment();
        Pathology pathology = treatment.getPathology();
        Prescription prescription = treatment.getPrescription();

        if (pathology != null) {
            pathology = pathologiesServices.findPathologyById(pathology.getId());
            treatment.setPathology(pathology);
        }

        if (prescription != null) {
            Prescription savedPrescription = prescriptionService.savePrescription(prescription);
            savedPrescription.setPrescriptionMedicines(prescription.getPrescriptionMedicines());
            treatment.setPrescription(savedPrescription);
        }

        ClinicHistory savedClinicHistory = clinicHistoryRepository.save(clinicHistory);
        return ClinicHistoryMapper.toResponse(savedClinicHistory);
    }

    @Override
    public ClinicHistoryRes update(ClinicHistoryReq entity) {
        return null;
    }

    @Override
    public void delete(Long id) {
        if (clinicHistoryRepository.existsById(id)) {
            clinicHistoryRepository.deleteById(id);
        } else {
            throw new EmptyResultDataAccessException("Not found", 1);
        }
    }
}
