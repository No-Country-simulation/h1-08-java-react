package io.hackathon.justina.doctor.services;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.repository.DoctorRepository;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.dto.PatientMinRes;
import io.hackathon.justina.utils.Age;
import io.hackathon.justina.utils.Enums.Genders;
import io.hackathon.justina.utils.Enums.Role;
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
public class DoctorServicesImp implements IBaseCRUDServices<DoctorDTO, Medico> {

    private final DoctorRepository doctorRepository;
    private final Mapper mapper = Mapper.getInstance();

    @Override
    public Page<DoctorDTO> findAll(Pageable pageable) {
        return this.doctorRepository.findAll(pageable).map(doc -> mapper.map(doc, DoctorDTO.class).orElse(null));
    }

    @Override
    public DoctorDTO findById(Long id) {
        return this.doctorRepository.findById(id).map(DoctorMapper::toMedicoDto).orElse(null);
    }

    public DoctorDTO findByEmail(String email) {
        return DoctorMapper.toMedicoDto(doctorRepository.findByEmail(email));
    }

    public DoctorDTO findByDni(String dni) {
        return DoctorMapper.toMedicoDto(doctorRepository.findByDni(dni));
    }

    public Medico findByLicenseNumber(String licenseNumber) {
        return doctorRepository.findByLicenseNumber(licenseNumber);
    }

    public Page<PatientMinRes> findPatientsByDoctorId(Long id, Pageable pageable) {
        if (!doctorRepository.existsById(id)) {
            throw new UsernameNotFoundException("El medico con la id " + id + " no existe");
        }
        return doctorRepository.findPatientsByDoctorId(id, pageable).map(PatientMapper::toPatientMinRes);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public DoctorDTO save(Medico entity) {
        try {
            entity.setId(null);
            entity.setRole(Role.ROLE_DOCTOR);
            entity.setGender(Genders.NOT_SPECIFIED);
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            entity.setEnabled(true);
            return mapper.map(doctorRepository.save(entity), DoctorDTO.class).orElseThrow(() -> new RuntimeException("Error al crear el medico."));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public DoctorDTO update(Medico entity) {
        Medico existingMedico = doctorRepository.findById(entity.getId())
                .orElseThrow(() -> new RuntimeException("El medico no existe."));
        updateFromDto(entity, existingMedico);

        return DoctorMapper.toMedicoDto(doctorRepository.save(existingMedico));

    }

    public DoctorDTO update(Long id, Medico medico) {
        Medico existingMedico = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El medico no existe."));
        updateFromDto(medico, existingMedico);

        return DoctorMapper.toMedicoDto(doctorRepository.save(existingMedico));
    }

    @Override
    public void delete(Long id) throws UsernameNotFoundException {
        if (!doctorRepository.existsById(id)) {
            throw new UsernameNotFoundException("El medico no existe.");
        }
        doctorRepository.deleteById(id);
    }

    private void updateFromDto(Medico entity, Medico existingMedico) {

        if (entity.getName() != null && !entity.getName().isBlank()) existingMedico.setName(entity.getName());
        if (entity.getLastName() != null && !entity.getLastName().isBlank())
            existingMedico.setLastName(entity.getLastName());
        if (entity.getDni() != null && !entity.getDni().isBlank()) existingMedico.setDni(entity.getDni());
        if (entity.getBirthdate() != null) {
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            existingMedico.setBirthdate(entity.getBirthdate());
        }
        if (entity.getGender() != null) existingMedico.setGender(entity.getGender());

        updateAddress(existingMedico.getAddress(), entity.getAddress());

        if (entity.getPhoneNumber() != null && !entity.getPhoneNumber().isBlank())
            existingMedico.setPhoneNumber(entity.getPhoneNumber());
        if (entity.getEmail() != null && !entity.getEmail().isBlank()) existingMedico.setEmail(entity.getEmail());
        if (entity.getSpeciality() != null && entity.getSpeciality().getId() != null)
            existingMedico.setSpeciality(entity.getSpeciality());
        if (entity.getLicenseNumber() != null && !entity.getLicenseNumber().isBlank())
            existingMedico.setLicenseNumber(entity.getLicenseNumber());

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