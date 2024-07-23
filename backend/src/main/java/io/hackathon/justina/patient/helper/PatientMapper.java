package io.hackathon.justina.patient.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.utils.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

public class PatientMapper {
    private final static Mapper mapper = Mapper.getInstance();

    public static Patient toPatient(RegisterPatientRequest request) {
        return Patient.builder()
                .nombre(request.getNombre().trim())
                .apellido(request.getApellido().trim())
                .dni(request.getDni().trim())
                .email(request.getEmail().trim())
                .address(mapper.map(request.getAddress(), Address.class).orElseGet(Address::new))
                .telefono(request.getTelefono().trim())
                .fechaNacimiento(request.getFechaNacimiento())
                .role(Role.PATIENT)
                .password(request.getPassword().trim())
                .build();

    }

    public static PatientDTO toPatientDTO(Patient patient) {
        return PatientDTO.builder()
                .id(patient.getId())
                .dni(patient.getDni().trim())
                .nombre(patient.getNombre().trim())
                .apellido(patient.getApellido().trim())
                .gender(patient.getGender())
                .bloodType(patient.getBloodType().trim())
                .height(patient.getHeight().trim())
                .weight(patient.getWeight())
                .address(mapper.map(patient.getAddress(), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(patient.getEmail().trim())
                .telefono(patient.getTelefono().trim())
                .role(patient.getRole())
                .build();
    }
}
