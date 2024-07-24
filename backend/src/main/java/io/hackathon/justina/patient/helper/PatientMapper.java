package io.hackathon.justina.patient.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.utils.Role;
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
                .role(Role.PATIENT)
                .password(request.getPassword().trim())
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
                .height(Optional.ofNullable(patient.getHeight()).map(String::trim).orElse(null))
                .weight(Optional.of(patient.getWeight()).orElse(0.0))
                .address(mapper.map(Optional.ofNullable(patient.getAddress()), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(Optional.ofNullable(patient.getEmail()).map(String::trim).orElse(null))
                .phoneNumber(Optional.ofNullable(patient.getPhoneNumber()).map(String::trim).orElse(null))
                .birthDate(patient.getBirthdate())
                .role(patient.getRole())
                .build();
    }
}