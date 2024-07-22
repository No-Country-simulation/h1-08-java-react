package io.hackathon.justina.patient.model.dto;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.utils.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientDTO {
    private Long id;

    private String dni;

    private String nombre;

    private String apellido;

    private String gender;

    private String bloodType;

    private String height;

    private double weight;

    private AddressDTO address;

    private String email;

    private String telefono;

    private Role role;
}
