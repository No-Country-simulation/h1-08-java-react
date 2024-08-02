package io.hackathon.justina.pathologies.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "pathology")
@AllArgsConstructor
@NoArgsConstructor
public class Pathology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(nullable = false)
    private String name;

    public Pathology(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public Pathology(Long pathology) {
        this.id = pathology;
    }
}
