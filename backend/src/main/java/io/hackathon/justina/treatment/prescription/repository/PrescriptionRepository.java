package io.hackathon.justina.treatment.prescription.repository;

import io.hackathon.justina.medicines.model.Medicine;
import io.hackathon.justina.treatment.prescription.model.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

    @Query("SELECT p FROM Prescription p JOIN Treatment t ON t.prescription.id = p.id JOIN ClinicHistory c ON c.treatment.id = t.id WHERE c.patient.id = :patientId")
    List<Prescription> findAllPrescriptionsByPatientId(@Param("patientId") Long patientId);

}
