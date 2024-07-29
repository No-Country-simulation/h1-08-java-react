package io.hackathon.justina.patient.services;

import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.patient.repository.PatientRepository;
import io.hackathon.justina.utils.Age;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.IMC;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientServicesImp implements IBaseCRUDServices<PatientDTO, Patient> {

    private final PatientRepository patientRepository;
    private final Mapper mapper = Mapper.getInstance();

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

    public Patient findByDni(String dni) {
        return patientRepository.findByDni(dni);
    }

    public PatientDTO PatientDTOFindByDni(String dni) {
        Patient patient = patientRepository.findByDni(dni);
        return mapper.map(patient, PatientDTO.class).orElse(null);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public PatientDTO save(Patient entity) {
        try {
            entity.setId(null);
            entity.setRole(Role.PATIENT);
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            entity.setEnabled(true);
            return mapper.map(patientRepository.save(entity), PatientDTO.class).orElseThrow(() -> new RuntimeException("Error al crear el paciente."));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public PatientDTO update(Patient entity) {
        entity.setImc(IMC.calculateBMI(entity.getWeight(), entity.getHeight()));
        return null;
    }

    @Override
    public void delete(Long id) {

    }


}
