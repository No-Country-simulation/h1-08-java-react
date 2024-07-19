package io.hackathon.justina.doctor.services;

import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDto;
import io.hackathon.justina.doctor.repository.DoctorRepository;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DoctorServicesImp implements IBaseCRUDServices<DoctorDto, Medico> {

    private final DoctorRepository doctorRepository;

    @Override
    public Page<DoctorDto> findAll(Pageable pageable) {
        return this.doctorRepository.findAll(pageable).map(DoctorMapper::toMedicoDto);
    }

    @Override
    public DoctorDto findById(Long id) {
        return null;
    }

    public Medico findByEmail(String email) {
        return doctorRepository.findByEmail(email);
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }

    @Override
    public DoctorDto save(Medico entity) {
        try {
            entity.setId(null);
            return DoctorMapper.toMedicoDto(this.doctorRepository.save(entity));
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
