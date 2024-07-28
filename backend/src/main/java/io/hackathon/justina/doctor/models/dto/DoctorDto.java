package io.hackathon.justina.doctor.models.dto;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.utils.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {
    private Long id;

    private String name;

    private String lastName;

    private String dni;

    private String phoneNumber;

    private String email;

    private AddressDTO address;

    private Especialidad speciality;

    private Integer licenseNumber;

    private Role role;
}
