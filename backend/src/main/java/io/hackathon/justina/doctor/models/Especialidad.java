package io.hackathon.justina.doctor.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@Entity
@Table(name = "Especialidad")
public class Especialidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String speciality;

    @OneToMany(mappedBy = "speciality")
    @JsonBackReference
    @ToString.Exclude
    private List<Medico> doctors;
}
