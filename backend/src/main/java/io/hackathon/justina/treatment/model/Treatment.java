package io.hackathon.justina.treatment.model;

import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.utils.Enums.TreatmentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "treatments")
@AllArgsConstructor
@NoArgsConstructor
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pathology_id")
    private Pathology pathology;

    @OneToOne(fetch = FetchType.LAZY)
    private Prescription prescription;

    @Column
    private String description;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TreatmentStatus status;
}
