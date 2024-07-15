package io.hackathon.justina.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Especialidad")
public class Especialidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String especialidad;

    @OneToMany(mappedBy = "especialidad")
    private List<Medico> medicos;
}
