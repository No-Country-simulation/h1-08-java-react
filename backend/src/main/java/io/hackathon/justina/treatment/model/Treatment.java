package io.hackathon.justina.treatment.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.hackathon.justina.clinicHistory.model.ClinicHistory;
import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.utils.Enums.TreatmentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "treatments")
@AllArgsConstructor
@NoArgsConstructor
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "pathology_id")
    private Pathology pathology;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "prescription_id")
    @JsonManagedReference
    private Prescription prescription;

    @Column
    private String description;

    @OneToOne(mappedBy = "treatment", fetch = FetchType.LAZY)
    @JsonBackReference
    private ClinicHistory clinicHistory;
    
    @Column(nullable = false, columnDefinition = "enum('PENDING', 'IN_PROGRESS', 'COMPLETED') default 'PENDING' ")
    @Enumerated(EnumType.STRING)
    private TreatmentStatus status;
}
