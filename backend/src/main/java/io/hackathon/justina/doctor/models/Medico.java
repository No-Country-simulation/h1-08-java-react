package io.hackathon.justina.doctor.models;

import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.user.model.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;
import java.util.Objects;
import java.util.Set;

@Data
@SuperBuilder
@Entity
@Table(name = "Medico")
@AllArgsConstructor
@NoArgsConstructor
public class Medico extends Usuario {

    @ManyToOne
    @JoinColumn(name = "id_speciality", referencedColumnName = "id")
    private Especialidad speciality;

    @Column(name = "license_number", nullable = false, unique = true)
    private String licenseNumber;

    @OneToMany(mappedBy = "doctors", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Patient> patients;

    @Override
    public String getUsername() {
        return this.licenseNumber;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        if (Objects.equals(getId(), ((Medico) obj).getId())) return true;
        if (getClass() != obj.getClass()) {
            return false;
        }
        return this.licenseNumber.equals(((Medico) obj).getLicenseNumber());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}
