package io.hackathon.justina.clinicHistory.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.treatment.model.Treatment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "clinic_histories")
@AllArgsConstructor
@NoArgsConstructor
public class ClinicHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "doctor_id")
    private Medico doctor;

    @Column
    private String medicalHistory;

    @Column
    private String familyBackground;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "treatment_id")
    @JsonManagedReference
    private Treatment treatment;

    @Column
    private String diagnosis;

    @Column
    private String studies;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
