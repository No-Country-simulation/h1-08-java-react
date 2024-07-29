package io.hackathon.justina.healthPlan.models;

import io.hackathon.justina.utils.Enums.TypeHealth;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "health_plans")
@AllArgsConstructor
@NoArgsConstructor
public class HealthPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column()
    private String name;

    @Enumerated(EnumType.STRING)
    private TypeHealth typeHealth;

    @Column()
    private Number numAffiliate;

    @Column()
    private String plan;
}
