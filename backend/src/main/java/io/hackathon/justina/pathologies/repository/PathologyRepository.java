package io.hackathon.justina.pathologies.repository;

import io.hackathon.justina.pathologies.model.Pathology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PathologyRepository extends JpaRepository<Pathology, Long> {

    @Query("SELECT p FROM Pathology p JOIN Treatment t ON t.pathology.id = p.id JOIN ClinicHistory c ON c.treatment.id = t.id WHERE c.patient.id = :patientId")
    List<Pathology> findAllPathologiesByPatientId(@Param("patientId") Long patientId);
}
