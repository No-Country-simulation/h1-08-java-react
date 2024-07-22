package io.hackathon.justina.doctor.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDto;
import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
import io.hackathon.justina.utils.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

public class DoctorMapper {

    private static final Mapper mapper = Mapper.getInstance();

    private DoctorMapper() {
    }

    public static Medico toMedico(RegisterDoctorRequest medico) {
        return Medico.builder()
                .nombre(medico.getNombre())
                .apellido(medico.getApellido())
                .dni(medico.getDni())
                .email(medico.getEmail())
                .address(mapper.map(medico.getAddress(), Address.class).orElseGet(Address::new))
                .fechaNacimiento(medico.getFechaNacimiento())
                .password(medico.getPassword())
                .telefono(medico.getTelefono())
                .healthPlan(mapper.map(medico.getHealthPlan(), HealthPlan.class).orElseGet(HealthPlan::new))
                .especialidad(mapper.map(medico.getDoctor().getEspecialidad(), Especialidad.class).orElseGet(Especialidad::new))
                .numeroLicencia(medico.getDoctor().getNumeroLicencia())
                .role(Role.DOCTOR)
                .build();
    }

    public static DoctorDto toMedicoDto(Medico medico) {
        return DoctorDto.builder()
                .id(medico.getId())
                .dni(medico.getDni())
                .nombre(medico.getNombre())
                .apellido(medico.getApellido())
                .address(mapper.map(medico.getAddress(), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(medico.getEmail())
                .telefono(medico.getTelefono())
                .healthPlan(mapper.map(medico.getHealthPlan(), HealthPlanDTO.class).orElseGet(HealthPlanDTO::new))
                .especialidad(medico.getEspecialidad())
                .role(medico.getRole())
                .build();
    }
}
