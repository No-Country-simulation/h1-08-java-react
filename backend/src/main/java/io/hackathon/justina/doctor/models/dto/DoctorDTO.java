package io.hackathon.justina.doctor.models.dto;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.utils.Enums.Genders;
import io.hackathon.justina.utils.Enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDTO {
    private Long id;

    private String name;

    private String lastName;

    private String dni;

    private LocalDate birthdate;

    private Genders gender;

    private String email;

    private String phoneNumber;

    private AddressDTO address;

    private Especialidad speciality;

    private Integer licenseNumber;

    private Role role;

}
