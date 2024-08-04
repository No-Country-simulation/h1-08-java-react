package io.hackathon.justina.user.model;

import io.hackathon.justina.address.models.Address;
import io.hackathon.justina.utils.Enums.Genders;
import io.hackathon.justina.utils.Enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Data
@SuperBuilder
@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String dni;

    @Transient
    private String licenseNumber;

    @Column(nullable = false)
    private int age;

    @Column(columnDefinition = "enum('MALE', 'FEMALE', 'NOT_BINARY', 'TRANS_GENDER', 'NOT_SPECIFIED') default 'NOT_SPECIFIED'")
    @Enumerated(EnumType.STRING)
    private Genders gender;

    @Column
    private LocalDate birthdate;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Address address;

    @Column(nullable = false, columnDefinition = "enum('ROLE_PATIENT', 'ROLE_DOCTOR') default 'ROLE_PATIENT'")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false, columnDefinition = "boolean default true")
    private Boolean enabled = true;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.getAuthority()));
    }

    @Override
    public String getUsername() {
        return switch (role) {
            case ROLE_PATIENT -> this.dni;
            case ROLE_DOCTOR -> this.licenseNumber;
            default -> throw new IllegalStateException("Unexpected value: " + role);
        };
    }
}
