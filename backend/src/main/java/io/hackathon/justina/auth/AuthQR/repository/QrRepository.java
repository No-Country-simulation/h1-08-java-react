package io.hackathon.justina.auth.AuthQR.repository;

import io.hackathon.justina.auth.AuthQR.model.QrModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QrRepository extends JpaRepository<QrModel, Long> {
    Optional<QrModel> findByHashAndDni(String hash, String dni);

    Optional<QrModel> findByHash(String hash);

    Optional<QrModel> findByDni(String dni);
}
