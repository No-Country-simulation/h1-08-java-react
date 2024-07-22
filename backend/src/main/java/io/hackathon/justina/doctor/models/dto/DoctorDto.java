package io.hackathon.justina.doctor.models.dto;

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

    private String nombre;

    private String apellido;

    private String telefono;

    private String email;

    private Especialidad especialidad;

    private Integer numeroLicencia;

    private Role role;
}
