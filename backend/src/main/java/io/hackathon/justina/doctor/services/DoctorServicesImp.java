package io.hackathon.justina.doctor.services;

import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.repository.DoctorRepository;
import io.hackathon.justina.utils.Age;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

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
        return null;
    }

    public DoctorDTO findByEmail(String email) {
        return DoctorMapper.toMedicoDto(doctorRepository.findByEmail(email));
    }

    public DoctorDTO findByDni(String dni) {
        return DoctorMapper.toMedicoDto(doctorRepository.findByDni(dni));
    }

    public Medico findByLicenseNumber(Integer licenseNumber) {
        return doctorRepository.findByLicenseNumber(licenseNumber);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public DoctorDTO save(Medico entity) {
        try {
            entity.setId(null);
            entity.setRole(Role.DOCTOR);
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

    @Override
    public void delete(Long id) {
        if (!doctorRepository.existsById(id)) {
            throw new UsernameNotFoundException("El medico no existe.");
        }
        doctorRepository.deleteById(id);
    }

    private void updateFromDto(Medico entity, Medico existingMedico) {

        if (entity.getName() != null) existingMedico.setName(entity.getName());
        if (entity.getLastName() != null) existingMedico.setLastName(entity.getLastName());
        if (entity.getDni() != null) existingMedico.setDni(entity.getDni());
        if (entity.getBirthdate() != null) {
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            existingMedico.setBirthdate(entity.getBirthdate());
        }
        if (entity.getGender() != null) existingMedico.setGender(entity.getGender());
        if (entity.getAddress() != null) existingMedico.setAddress(entity.getAddress());
        if (entity.getPhoneNumber() != null) existingMedico.setPhoneNumber(entity.getPhoneNumber());
        if (entity.getEmail() != null) existingMedico.setEmail(entity.getEmail());
        if (entity.getSpeciality() != null) existingMedico.setSpeciality(entity.getSpeciality());
        if (entity.getLicenseNumber() != null) existingMedico.setLicenseNumber(entity.getLicenseNumber());

    }
}