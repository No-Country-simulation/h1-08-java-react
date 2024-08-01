package io.hackathon.justina.laboratory.model;

import io.hackathon.justina.medicines.model.Medicine;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Entity
@Table(name = "laboratories")
@AllArgsConstructor
@NoArgsConstructor
public class Laboratory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String MedLabCode;

    @OneToMany(mappedBy = "laboratory", fetch = FetchType.LAZY)
    private Set<Medicine> medicines;

    public Laboratory(Long id, String medLabCode, String name) {
        this.id = id;
        this.MedLabCode = medLabCode;
        this.name = name;
    }
}
