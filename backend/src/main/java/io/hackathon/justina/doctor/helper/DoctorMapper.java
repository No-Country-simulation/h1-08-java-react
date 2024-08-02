package io.hackathon.justina.doctor.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.models.dto.DoctorReqUpdate;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.Enums.Genders;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

import java.util.Optional;

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
                .address(medico.getAddress() == null ? new Address() : mapper.map(medico.getAddress(), Address.class).get())
                .birthdate(medico.getBirthdate())
                .password(medico.getPassword().trim())
                .phoneNumber(medico.getPhoneNumber().trim())
                .speciality(mapper.map(medico.getDoctor().getSpeciality(), Especialidad.class).orElseGet(Especialidad::new))
                .licenseNumber(Optional.ofNullable(medico.getLicenseNumber()).orElse(""))
                .role(Role.ROLE_DOCTOR)
                .build();
    }

    public static DoctorDTO toMedicoDto(Medico medico) {
        return DoctorDTO.builder()
                .id(medico.getId())
                .dni(medico.getDni())
                .name(medico.getName())
                .lastName(medico.getLastName())
                .gender(medico.getGender() == null ? null : Genders.valueOf(medico.getGender().toString()))
                .birthdate(medico.getBirthdate())
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
                .licenseNumber(Optional.ofNullable(medico.getLicenseNumber()).orElse(""))
                .email(medico.getEmail().trim())
                .address(mapper.map(medico.getAddress(), Address.class).orElseGet(Address::new))
                .birthdate(medico.getBirthdate())
                .password(medico.getPassword().trim())
                .phoneNumber(medico.getPhoneNumber().trim())
                .role(medico.getRole())
                .build();
    }

    public static Medico toMedico(DoctorDTO doctorDTO) {
        return Medico.builder()
                .name(doctorDTO.getName().trim())
                .lastName(doctorDTO.getLastName().trim())
                .dni(doctorDTO.getDni().trim())
                .email(doctorDTO.getEmail().trim())
                .address(mapper.map(doctorDTO.getAddress(), Address.class).orElseGet(Address::new))
                .birthdate(doctorDTO.getBirthdate())
                .phoneNumber(doctorDTO.getPhoneNumber().trim())
                .speciality(mapper.map(doctorDTO.getSpeciality(), Especialidad.class).orElseGet(Especialidad::new))
                .licenseNumber(Optional.ofNullable(doctorDTO.getLicenseNumber()).orElse("").trim())
                .role(Role.ROLE_DOCTOR)
                .build();
    }

    public static Medico toMedico(DoctorReqUpdate doctorRequest) {
        return Medico.builder()
                .name(Optional.ofNullable(doctorRequest.getName()).orElse("").trim())
                .lastName(Optional.ofNullable(doctorRequest.getLastName()).orElse("").trim())
                .dni(Optional.ofNullable(doctorRequest.getDni()).orElse("").trim())
                .email(Optional.ofNullable(doctorRequest.getEmail()).orElse("").trim())
                .gender(Genders.ofString(doctorRequest.getGender().toString()))
                .address(mapper.map(doctorRequest.getAddress(), Address.class).orElseGet(Address::new))
                .birthdate(doctorRequest.getBirthdate())
                .phoneNumber(Optional.ofNullable(doctorRequest.getPhoneNumber()).orElse("").trim())
                .speciality(mapper.map(doctorRequest.getSpeciality(), Especialidad.class).orElseGet(Especialidad::new))
                .licenseNumber(Optional.ofNullable(doctorRequest.getLicenseNumber()).orElse("").trim())
                .role(Role.ROLE_DOCTOR)
                .build();
    }
}

