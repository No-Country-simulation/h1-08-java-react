package io.hackathon.justina.doctor.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

public class DoctorMapper {

    private static final Mapper mapper = Mapper.getInstance();

    private DoctorMapper() {
    }

    public static Medico toMedico(RegisterDoctorRequest medico) {
        return Medico.builder()
                .name(medico.getName().trim())
                .lastName(medico.getLastName().trim())
                .dni(medico.getDni().trim())
                .email(medico.getEmail().trim())
                .address(new Address())
                .birthdate(medico.getBirthdate())
                .password(medico.getPassword().trim())
                .phoneNumber(medico.getPhoneNumber().trim())
                .speciality(mapper.map(medico.getDoctor().getSpeciality(), Especialidad.class).orElseGet(Especialidad::new))
                .licenseNumber(medico.getLicenseNumber())
                .role(Role.DOCTOR)
                .build();
    }

    public static DoctorDTO toMedicoDto(Medico medico) {
        return DoctorDTO.builder()
                .id(medico.getId())
                .dni(medico.getDni())
                .name(medico.getName())
                .lastName(medico.getLastName())
                .address(mapper.map(medico.getAddress(), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(medico.getEmail())
                .phoneNumber(medico.getPhoneNumber())
                .speciality(medico.getSpeciality())
                .licenseNumber(medico.getLicenseNumber())
                .role(medico.getRole())
                .build();
    }

    public static Usuario toUsuario(Medico medico) {
        return Usuario.builder()
                .name(medico.getName().trim())
                .lastName(medico.getLastName().trim())
                .dni(medico.getDni().trim())
                .licenseNumber(medico.getLicenseNumber())
                .email(medico.getEmail().trim())
                .address(mapper.map(medico.getAddress(), Address.class).orElseGet(Address::new))
                .birthdate(medico.getBirthdate())
                .password(medico.getPassword().trim())
                .phoneNumber(medico.getPhoneNumber().trim())
                .role(medico.getRole())
                .build();
    }
}

