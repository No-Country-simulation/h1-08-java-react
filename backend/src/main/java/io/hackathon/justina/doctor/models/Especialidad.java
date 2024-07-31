package io.hackathon.justina.doctor.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "Especialidad")
@AllArgsConstructor
@NoArgsConstructor
public class Especialidad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String speciality;
/*
    @OneToMany(mappedBy = "speciality")
    @JsonBackReference
    @ToString.Exclude
    private List<Medico> doctors;

 */
}
