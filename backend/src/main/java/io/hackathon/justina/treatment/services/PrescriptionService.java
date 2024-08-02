package io.hackathon.justina.treatment.services;

import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import io.hackathon.justina.treatment.prescription.repository.PrescriptionMedicineRepository;
import io.hackathon.justina.treatment.prescription.repository.PrescriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;
    private final PrescriptionMedicineRepository prescriptionMedicineRepository;

    public Prescription savePrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public List<PrescriptionMedicine> savePrescriptionMedicine(Set<PrescriptionMedicine> prescriptionMedicine) {
        return prescriptionMedicineRepository.saveAll(prescriptionMedicine);
    }

}
