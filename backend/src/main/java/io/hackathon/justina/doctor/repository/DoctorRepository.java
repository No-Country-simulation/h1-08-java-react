package io.hackathon.justina.doctor.repository;

import io.hackathon.justina.doctor.models.Medico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Medico, Long> {
    boolean existsByEmail(String email);

    Medico findByEmail(String email);

    Medico findByDni(String dni);

    Medico findByLicenseNumber(Integer licenseNumber);
}
