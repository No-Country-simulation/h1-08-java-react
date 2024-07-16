package io.hackathon.justina.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@MappedSuperclass
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String apellido;
    private Integer telefono;
    private String email;
    private String password;
}
