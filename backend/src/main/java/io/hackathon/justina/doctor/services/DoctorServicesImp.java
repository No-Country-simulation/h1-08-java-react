package io.hackathon.justina.doctor.services;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDto;
import io.hackathon.justina.doctor.repository.DoctorRepository;
import io.hackathon.justina.utils.Age;
import io.hackathon.justina.utils.Role;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DoctorServicesImp implements IBaseCRUDServices<DoctorDto, Medico> {

    private final DoctorRepository doctorRepository;
    private final Mapper mapper = Mapper.getInstance();

    @Override
    public Page<DoctorDto> findAll(Pageable pageable) {
        return this.doctorRepository.findAll(pageable).map(doc -> mapper.map(doc, DoctorDto.class).orElse(null));
    }

    @Override
    public DoctorDto findById(Long id) {
        return null;
    }

    public Medico findByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }

    public Medico findByDni(String dni) {
        return doctorRepository.findByDni(dni);
    }

    public Medico findByLicenseNumber(Integer licenseNumber) {
        return doctorRepository.findByLicenseNumber(licenseNumber);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public DoctorDto save(Medico entity) {
        try {
            entity.setId(null);
            entity.setRole(Role.DOCTOR);
            entity.setAge(Age.calculateAge(entity.getBirthdate()));
            return mapper.map(doctorRepository.save(entity), DoctorDto.class).orElseThrow(() -> new RuntimeException("Error al crear el medico."));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public DoctorDto update(Medico entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
