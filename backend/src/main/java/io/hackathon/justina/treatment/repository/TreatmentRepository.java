package io.hackathon.justina.treatment.repository;

import io.hackathon.justina.treatment.model.Treatment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

}