package io.hackathon.justina.doctor.helper;

import io.hackathon.justina.auth.models.dto.request.RegisterRequest;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDto;
import io.hackathon.justina.utils.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

public class DoctorMapper {

    private static final Mapper mapper = Mapper.getInstance();

    private DoctorMapper() {}
    public static Medico toMedico(RegisterRequest medico) {
        return Medico.builder()
                .id( medico.getId())
                .email(medico.getEmail())
                .nombre(medico.getNombre())
                .apellido( medico.getApellido())
                .telefono(medico.getTelefono())
                .password(medico.getPassword())
                .role(Role.DOCTOR)
                .especialidad(mapper.map(medico.getDoctor().getEspecialidad(), Especialidad.class))
                .numeroLicencia(medico.getDoctor().getNumeroLicencia())
                .build();
    }

    public static DoctorDto toMedicoDto(Medico medico) {
        return DoctorDto.builder()
                .id(medico.getId())
                .email(medico.getEmail())
                .nombre(medico.getNombre())
                .apellido( medico.getApellido())
                .telefono(medico.getTelefono())
                .role(medico.getRole())
                .especialidad(medico.getEspecialidad())
                .numeroLicencia(medico.getNumeroLicencia())
                .build();
    }
}
