package io.hackathon.justina.patient.repository;

import io.hackathon.justina.patient.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    boolean existsByDni(String dni);

    Patient findByEmail(String email);

    Optional<Patient> findByDni(String dni);
}
