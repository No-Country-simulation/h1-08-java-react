package io.hackathon.justina.patient.model;

import io.hackathon.justina.user.model.Usuario;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@Entity
@Table(name = "patient")
@EqualsAndHashCode(callSuper = true)
public class Patient extends Usuario {

    @Column(name = "dni", unique = true)
    private String dni;
}
