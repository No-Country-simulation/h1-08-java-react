package io.hackathon.justina.patient.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.healthPlan.helper.HealthPlanMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.patient.model.dto.PatientMinRes;
import io.hackathon.justina.patient.model.dto.PatientRequest;
import io.hackathon.justina.utils.Enums.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

import java.util.Optional;

public class PatientMapper {
    private final static Mapper mapper = Mapper.getInstance();

    public static Patient toPatient(RegisterPatientRequest request) {
        return Patient.builder()
                .name(request.getName().trim())
                .lastName(request.getLastName().trim())
                .dni(request.getDni().trim())
                .email(request.getEmail().trim())
                .address(mapper.map(request.getAddress(), Address.class).orElseGet(Address::new))
                .phoneNumber(request.getPhoneNumber().trim())
                .birthdate(request.getBirthdate())
                .role(Role.ROLE_PATIENT)
                .build();

    }

    public static Patient toPatient(PatientRequest patient) {
        return Patient.builder()
                .name(Optional.ofNullable(patient.getName()).map(String::trim).orElse(""))
                .lastName(Optional.ofNullable(patient.getLastName()).map(String::trim).orElse(""))
                .dni(Optional.ofNullable(patient.getDni()).map(String::trim).orElse(""))
                .email(Optional.ofNullable(patient.getEmail()).map(String::trim).orElse(""))
                .gender(patient.getGender())
                .bloodType(Optional.ofNullable(patient.getBloodType()).map(String::trim).orElse(""))
                .height(patient.getHeight())
                .weight(patient.getWeight())
                .healthPlan(patient.getHealthPlan() != null ? HealthPlanMapper.toHealthPlan(patient.getHealthPlan()) : null)
                .address(mapper.map(patient.getAddress(), Address.class).orElseGet(Address::new))
                .phoneNumber(Optional.ofNullable(patient.getPhoneNumber()).map(String::trim).orElse(""))
                .birthdate(patient.getBirthdate())
                .role(Role.ROLE_PATIENT)
                .build();
    }

    public static PatientDTO toPatientDTO(Patient patient) {
        return PatientDTO.builder()
                .id(patient.getId())
                .age(patient.getAge())
                .dni(Optional.ofNullable(patient.getDni()).map(String::trim).orElse(null))
                .name(Optional.ofNullable(patient.getName()).map(String::trim).orElse(null))
                .lastName(Optional.ofNullable(patient.getLastName()).map(String::trim).orElse(null))
                .gender(patient.getGender())
                .bloodType(Optional.ofNullable(patient.getBloodType()).map(String::trim).orElse(null))
                .imc(patient.getImc())
                .height(patient.getHeight())
                .weight(Optional.of(patient.getWeight()).orElse(0.0))
                .address(mapper.map(Optional.ofNullable(patient.getAddress()), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(Optional.ofNullable(patient.getEmail()).map(String::trim).orElse(null))
                .phoneNumber(Optional.ofNullable(patient.getPhoneNumber()).map(String::trim).orElse(null))
                .birthDate(patient.getBirthdate() != null ? patient.getBirthdate() : null)
                .role(patient.getRole())
                .build();
    }

    public static PatientMinRes toPatientMinRes(Patient patient) {
        return PatientMinRes.builder()
                .id(patient.getId())
                .dni(patient.getDni())
                .name(patient.getName())
                .lastName(patient.getLastName())
                .build();
    }
}
