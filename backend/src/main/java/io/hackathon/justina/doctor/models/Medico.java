package io.hackathon.justina.doctor.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.hackathon.justina.user.model.Usuario;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@Entity
@Table(name = "Medico")
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Medico extends Usuario {

    @ManyToOne
    @JoinColumn(name = "id_especialidad", referencedColumnName = "id")
    private Especialidad especialidad;

    @Column(name = "numerolicencia")
    private Integer numeroLicencia;
}
