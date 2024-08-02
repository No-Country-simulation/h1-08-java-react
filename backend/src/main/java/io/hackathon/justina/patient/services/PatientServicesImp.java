package io.hackathon.justina.patient.services;

import io.hackathon.justina.patient.helper.PatientMapper;
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
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PatientServicesImp implements IBaseCRUDServices<PatientDTO, Patient> {

    private final PatientRepository patientRepository;
    private final Mapper mapper = Mapper.getInstance();

    @Override
    public Page<PatientDTO> findAll(Pageable pageable) {
        return patientRepository.findAll(pageable).map(PatientMapper::toPatientDTO);
    }

    @Override
    public PatientDTO findById(Long id) {
        return PatientMapper.toPatientDTO(patientRepository.findById(id).orElse(new Patient()));
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
        Patient existingPatient = patientRepository.findById(entity.getId()).orElseThrow(() -> new RuntimeException("El paciente no existe."));

        updateFromDto(entity, existingPatient);

        return PatientMapper.toPatientDTO(patientRepository.save(existingPatient));
    }

    @Override
    public void delete(Long id) {
        if (!patientRepository.existsById(id)) {
            throw new UsernameNotFoundException("El paciente no existe.");
        }
        patientRepository.deleteById(id);
    }

    private void updateFromDto(Patient entity, Patient existingPatient) {

        if (entity.getName() != null) existingPatient.setName(entity.getName());
        if (entity.getLastName() != null) existingPatient.setLastName(entity.getLastName());
        if (entity.getDni() != null) existingPatient.setDni(entity.getDni());
        if (entity.getBirthdate() != null) {
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            existingPatient.setBirthdate(entity.getBirthdate());
        }
        if (entity.getHealthPlan() != null) existingPatient.setHealthPlan(entity.getHealthPlan());
        if (entity.getBloodType() != null) existingPatient.setBloodType(entity.getBloodType());
        if (entity.getGender() != null) existingPatient.setGender(entity.getGender());
        if (entity.getAddress() != null && entity.getAddress().getId() != null)
            existingPatient.setAddress(entity.getAddress());
        if (entity.getPhoneNumber() != null) existingPatient.setPhoneNumber(entity.getPhoneNumber());
        if (entity.getEmail() != null) existingPatient.setEmail(entity.getEmail());
        if (entity.getWeight() != 0 && entity.getHeight() != 0) {
            existingPatient.setWeight(entity.getWeight());
            existingPatient.setHeight(entity.getHeight());
            existingPatient.setImc(IMC.calculateBMI(entity.getWeight(), entity.getHeight()));
        }


    }

}
