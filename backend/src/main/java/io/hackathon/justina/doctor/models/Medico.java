package io.hackathon.justina.doctor.models;

import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.user.model.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.Set;

@Data
@SuperBuilder
@Entity
@Table(name = "Medico")
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Medico extends Usuario {

    @ManyToOne
    @JoinColumn(name = "id_speciality", referencedColumnName = "id")
    private Especialidad speciality;


    //private Integer licenseNumber;

    @OneToMany(mappedBy = "doctors", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Patient> patients;

    @Override
    public String getUsername() {
        return switch (getRole()) {
            case PATIENT -> getDni();
            case DOCTOR -> getLicenseNumber().toString();
            default -> throw new IllegalStateException("Unexpected value: " + getRole());
        };
    }
}
