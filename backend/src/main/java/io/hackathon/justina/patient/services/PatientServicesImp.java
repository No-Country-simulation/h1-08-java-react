package io.hackathon.justina.patient.services;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.repository.DoctorRepository;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.patient.repository.PatientRepository;
import io.hackathon.justina.utils.Age;
import io.hackathon.justina.utils.Enums.Genders;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.IMC;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.function.Consumer;

@Service
@RequiredArgsConstructor
public class PatientServicesImp implements IBaseCRUDServices<PatientDTO, Patient> {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final Mapper mapper = Mapper.getInstance();

    @Override
    public Page<PatientDTO> findAll(Pageable pageable) {
        return patientRepository.findAll(pageable).map(PatientMapper::toPatientDTO);
    }

    @Override
    public PatientDTO findById(Long id) {
        return PatientMapper.toPatientDTO(patientRepository.findById(id).orElse(null));
    }

    public Patient findByEmail(String email) {
        return patientRepository.findByEmail(email);
    }

    public Patient findByDni(String dni) {
        return patientRepository.findByDni(dni).orElse(null);
    }

    public PatientDTO PatientDTOFindByDni(String dni) {
        Patient patient = patientRepository.findByDni(dni).orElse(null);
        return mapper.map(patient, PatientDTO.class).orElse(null);
    }

    public Patient updateListDoctor(String patientId, Long doctorId) {
        if (patientId == null || doctorId == null) {
            throw new RuntimeException("El paciente o el medico no pueden ser nulos.");
        }
        Patient patient = patientRepository.findByDni(patientId).orElseThrow(() -> new RuntimeException("El paciente no existe."));
        Medico medico = doctorRepository.findById(doctorId).orElseThrow(() -> new RuntimeException("El medico no existe."));

        if (patient.getDoctors().contains(medico)) {
            throw new RuntimeException("El medico ya se encuentra asignado al paciente.");
        }

        patient.getDoctors().add(medico);
        patientRepository.save(patient);

        return patient;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public PatientDTO save(Patient entity) {
        try {
            entity.setId(null);
            entity.setRole(Role.ROLE_PATIENT);
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            entity.setGender(Genders.NOT_SPECIFIED);
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

    public PatientDTO update(Long id, Patient entity) {
        Patient existingPatient = patientRepository.findById(id).orElseThrow(() -> new RuntimeException("El paciente no existe."));

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

        if (entity.getName() != null && !entity.getName().isBlank()) existingPatient.setName(entity.getName());
        if (entity.getLastName() != null && !entity.getLastName().isBlank())
            existingPatient.setLastName(entity.getLastName());
        if (entity.getDni() != null && !entity.getDni().isBlank()) existingPatient.setDni(entity.getDni());
        if (entity.getBirthdate() != null) {
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            existingPatient.setBirthdate(entity.getBirthdate());
        }
        if (entity.getHealthPlan() != null) existingPatient.setHealthPlan(entity.getHealthPlan());
        if (entity.getBloodType() != null && !entity.getBloodType().isBlank())
            existingPatient.setBloodType(entity.getBloodType());
        if (entity.getGender() != null) existingPatient.setGender(entity.getGender());


        updateAddress(existingPatient.getAddress(), entity.getAddress());

        if (entity.getPhoneNumber() != null && !entity.getPhoneNumber().isBlank())
            existingPatient.setPhoneNumber(entity.getPhoneNumber());
        if (entity.getEmail() != null && !entity.getEmail().isBlank()) existingPatient.setEmail(entity.getEmail());
        if (entity.getWeight() != 0 && entity.getHeight() != 0) {
            existingPatient.setWeight(entity.getWeight());
            existingPatient.setHeight(entity.getHeight());
            existingPatient.setImc(IMC.calculateBMI(entity.getWeight(), entity.getHeight()));
        }


    }

    private void updateAddress(Address existingAddress, Address newAddress) {
        if (newAddress != null) {
            newAddress.setId(existingAddress.getId());
            updateFieldIfNotNullOrBlank(existingAddress::setStreet, newAddress.getStreet());
            updateFieldIfNotNullOrBlank(existingAddress::setCity, newAddress.getCity());
            updateFieldIfNotNullOrBlank(existingAddress::setCountry, newAddress.getCountry());
        }
    }

    private void updateFieldIfNotNullOrBlank(Consumer<String> setter, String value) {
        if (value != null && !value.isBlank()) {
            setter.accept(value);
        }

    }

}
