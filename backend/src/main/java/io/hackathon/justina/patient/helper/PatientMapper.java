package io.hackathon.justina.patient.helper;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.utils.Role;
import io.hackathon.justina.utils.modelMapper.Mapper;

public class PatientMapper {
    private final static Mapper mapper = Mapper.getInstance();

    public static Patient toPatient(RegisterPatientRequest request) {
        return Patient.builder()
                .nombre(request.getNombre())
                .apellido(request.getApellido())
                .dni(request.getDni())
                .email(request.getEmail())
                .address(mapper.map(request.getAddress(), Address.class).orElseGet(Address::new))
                .telefono(request.getTelefono())
                .fechaNacimiento(request.getFechaNacimiento())
                .role(Role.PATIENT)
                .password(request.getPassword())
                .bloodType(request.getPatient().getBloodType())
                .gender(request.getPatient().getGender())
                .weight(request.getPatient().getWeight())
                .height(request.getPatient().getHeight())
                .healthPlan(mapper.map(request.getPatient().getHealthPlan(), HealthPlan.class).orElseGet(HealthPlan::new))
                .build();

    }

    public static PatientDTO toPatientDTO(Patient patient) {
        return PatientDTO.builder()
                .id(patient.getId())
                .dni(patient.getDni())
                .nombre(patient.getNombre())
                .apellido(patient.getApellido())
                .gender(patient.getGender())
                .bloodType(patient.getBloodType())
                .height(patient.getHeight())
                .weight(patient.getWeight())
                .address(mapper.map(patient.getAddress(), AddressDTO.class).orElseGet(AddressDTO::new))
                .email(patient.getEmail())
                .telefono(patient.getTelefono())
                .role(patient.getRole())
                .build();
    }
}
