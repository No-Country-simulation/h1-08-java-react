package io.hackathon.justina.patient.model.dto;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.utils.Genders;
import io.hackathon.justina.utils.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientDTO {
    private Long id;

    private String dni;

    private String name;

    private String lastName;

    private Number age;

    private LocalDate birthDate;

    private Genders gender;

    private String bloodType;

    private String height;

    private double weight;

    private AddressDTO address;

    private String email;

    private String phoneNumber;

    private Role role;
}
