package io.hackathon.justina.patient.model;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.healthPlan.models.HealthPlan;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.Enums.Genders;
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
@Table(name = "patient")
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Patient extends Usuario {

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "health_plan_id")
    private HealthPlan healthPlan;

    @Column()
    private String bloodType;

    @Enumerated(EnumType.STRING)
    private Genders gender;

    @Column()
    private double height;

    @Column()
    private double weight;

    @Column()
    private double imc;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "patient_doctor",
            joinColumns = @JoinColumn(name = "patient_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "doctor_id"))
    private Set<Medico> doctors;

    @Override
    public String getUsername() {
        return this.getDni();
    }
}
