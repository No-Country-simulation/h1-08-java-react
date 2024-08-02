package io.hackathon.justina.medicines.model;

import io.hackathon.justina.laboratory.model.Laboratory;
import io.hackathon.justina.medicines.model.Units.Unit;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@Entity
@Table(name = "medicines")
@AllArgsConstructor
@NoArgsConstructor
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long code;

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
    private Integer strength;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "unit_id")
    private Unit unit;

    @Column
    private Integer divisibleUnit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "laboratory_id")
    private Laboratory laboratory;

    @Column(columnDefinition = "boolean default false")
    private boolean isFreeSale;

    @OneToMany(mappedBy = "medicine", cascade = CascadeType.ALL)
    private Set<PrescriptionMedicine> prescription;

    public Medicine(Long code, String name, String namePresentation, String dies, String codeBar, String activePrinciple, String activePrincipleName, String alternativeName, Integer strength, Integer divisibleUnit, boolean isFreeSale, Unit unit, Laboratory laboratory) {
        this.code = code;
        this.name = name;
        this.namePresentation = namePresentation;
        this.dies = dies;
        this.codeBar = codeBar;
        this.activePrinciple = activePrinciple;
        this.activePrincipleName = activePrincipleName;
        this.alternativeName = alternativeName;
        this.strength = strength;
        this.divisibleUnit = divisibleUnit;
        this.isFreeSale = isFreeSale;
        this.unit = unit;
        this.laboratory = laboratory;
    }

    public Medicine(Long code, String name, String namePresentation, String dies, String codeBar, String activePrinciple, String activePrincipleName, Integer strength, Integer divisibleUnit, boolean isFreeSale, Unit unit, Laboratory laboratory) {
        this.code = code;
        this.name = name;
        this.namePresentation = namePresentation;
        this.dies = dies;
        this.codeBar = codeBar;
        this.activePrinciple = activePrinciple;
        this.activePrincipleName = activePrincipleName;
        this.strength = strength;
        this.divisibleUnit = divisibleUnit;
        this.isFreeSale = isFreeSale;
        this.unit = unit;
        this.laboratory = laboratory;
    }

    public Medicine(Long medicine) {
        this.id = medicine;
    }
}
