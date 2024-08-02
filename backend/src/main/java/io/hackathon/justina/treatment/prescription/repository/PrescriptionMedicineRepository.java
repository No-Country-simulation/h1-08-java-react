package io.hackathon.justina.treatment.prescription.repository;

import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescriptionMedicineRepository extends JpaRepository<PrescriptionMedicine, Long> {
}
