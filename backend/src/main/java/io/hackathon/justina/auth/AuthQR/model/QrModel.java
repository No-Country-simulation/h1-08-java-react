package io.hackathon.justina.auth.AuthQR.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
public class QrModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String hash;

    @Column(nullable = false)
    private String dni;

    @Column(nullable = false)
    private boolean isUsed;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime expiresAt;

    @PrePersist
    public void onPersist() {
        this.createdAt = LocalDateTime.now();
    }
}
