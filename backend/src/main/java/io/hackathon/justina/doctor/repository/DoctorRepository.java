package io.hackathon.justina.doctor.repository;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.patient.model.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Medico, Long> {
    boolean existsByEmail(String email);

    Medico findByEmail(String email);

    Medico findByDni(String dni);

    Medico findByLicenseNumber(String licenseNumber);

    @Query("SELECT p FROM Patient p JOIN p.doctors d WHERE d.id = :doctorId")
    Page<Patient> findPatientsByDoctorId(@Param("doctorId") Long id, Pageable pageable);

}
