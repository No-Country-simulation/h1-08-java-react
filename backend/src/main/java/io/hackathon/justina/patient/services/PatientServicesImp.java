package io.hackathon.justina.patient.services;

import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.patient.repository.PatientRepository;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientServicesImp implements IBaseCRUDServices<PatientDTO, Patient> {

    private final PatientRepository patientRepository;


    @Override
    public Page<PatientDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public PatientDTO findById(Long id) {
        return null;
    }

    public Patient findByEmail(String email) {
        return patientRepository.findByEmail(email);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public PatientDTO save(Patient entity) {
        try {
            entity.setId(null);
            return PatientMapper.toPatientDTO(patientRepository.save(entity));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public PatientDTO update(Patient entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }


}
