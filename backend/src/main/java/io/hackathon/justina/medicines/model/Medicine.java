package io.hackathon.justina.medicines.model;

import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.laboratory.model.Laboratory;
import io.hackathon.justina.medicines.model.Units.Unit;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Entity
@Table(name = "medicines")
@AllArgsConstructor
@NoArgsConstructor
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String namePresentation;

    @Column
    private String dies;

    @Column
    private String codeBar;

    @Column
    private String activePrinciple;

    @Column
    private String activePrincipleName;

    @Column
    private String alternativeName;

    @Column
    private Integer Strength;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "unit_id")
    private Unit unit;

    @Column
    private Integer DivisibleUnit;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Laboratory laboratory;

    @OneToMany(mappedBy = "medicine", cascade = CascadeType.ALL)
    private Set<PrescriptionMedicine> prescription;

}
