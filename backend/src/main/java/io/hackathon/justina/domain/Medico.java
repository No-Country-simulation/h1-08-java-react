package io.hackathon.justina.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Medico")
public class Medico extends Usuario {

    @ManyToOne
    @JoinColumn(name = "id_especialidad", referencedColumnName = "id")
    private Especialidad especialidad;

    @Column(name = "numerolicencia")
    private Integer numeroLicencia;
}
