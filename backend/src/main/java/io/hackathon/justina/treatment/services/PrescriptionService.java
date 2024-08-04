package io.hackathon.justina.treatment.services;

import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import io.hackathon.justina.treatment.prescription.repository.PrescriptionMedicineRepository;
import io.hackathon.justina.treatment.prescription.repository.PrescriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;
    private final PrescriptionMedicineRepository prescriptionMedicineRepository;

    public Prescription savePrescription(Prescription prescription) {
        return prescriptionRepository.save(prescription);
    }

    public void savePrescriptionMedicine(PrescriptionMedicine prescriptionMedicine) {
        prescriptionMedicineRepository.save(prescriptionMedicine);
    }

    public Prescription findPrescriptionById(Long id) {
        return prescriptionRepository.findById(id).orElse(null);
    }

}
