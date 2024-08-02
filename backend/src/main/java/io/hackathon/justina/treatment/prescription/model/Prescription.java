package io.hackathon.justina.treatment.prescription.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.hackathon.justina.treatment.model.Treatment;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@Entity
@Table(name = "prescription")
@AllArgsConstructor
@NoArgsConstructor
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "prescription", orphanRemoval = true)
    @JsonManagedReference
    private Set<PrescriptionMedicine> prescriptionMedicines = new HashSet<>();

    @OneToOne(mappedBy = "prescription")
    @JsonBackReference
    @JsonIgnore
    private Treatment treatment;
}
