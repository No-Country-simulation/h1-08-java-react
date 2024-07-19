package io.hackathon.justina.patient.model.dto;

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

    private String telefono;

    private String email;

    private Role role;
}
