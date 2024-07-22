package io.hackathon.justina.doctor.models.dto;

import io.hackathon.justina.address.models.dto.AddressDTO;
import io.hackathon.justina.doctor.models.Especialidad;
import io.hackathon.justina.healthPlan.models.dto.HealthPlanDTO;
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

    private String dni;

    private String telefono;

    private String email;

    private AddressDTO address;

    private Especialidad especialidad;

    private Integer numeroLicencia;

    private HealthPlanDTO healthPlan;

    private Role role;
}
