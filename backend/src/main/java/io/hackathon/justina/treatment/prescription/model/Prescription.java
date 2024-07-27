package io.hackathon.justina.treatment.prescription.model;

import io.hackathon.justina.treatment.model.Treatment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Entity
@Table(name = "prescription")
@AllArgsConstructor
@NoArgsConstructor
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "prescription", cascade = CascadeType.ALL)
    private Set<PrescriptionMedicine> prescriptionMedicines;

}
