package io.hackathon.justina.treatment.helper;

import io.hackathon.justina.medicines.model.Medicine;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineMinRes;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineReq;

public class PrescriptionMedicineMapper {

    public static PrescriptionMedicineMinRes toPrescriptionMedicineMinRes(PrescriptionMedicine prescriptionMedicine) {
        return PrescriptionMedicineMinRes.builder().medicine(prescriptionMedicine.getMedicine().getId()).dose(prescriptionMedicine.getDose()).build();
    }

    public static PrescriptionMedicine toPrescriptionMedicine(PrescriptionMedicineReq prescriptionMedicineReq) {
        Medicine medicine = new Medicine();
        medicine.setId(prescriptionMedicineReq.getMedicine());
        return PrescriptionMedicine.builder()
                .medicine(medicine)
                .dose(prescriptionMedicineReq.getDose())
                .dosesTaken(0)
                .frequency(prescriptionMedicineReq.getFrequency())
                .startDate(prescriptionMedicineReq.getStartDate())
                .endDate(prescriptionMedicineReq.getEndDate())
                .build();
    }

}
