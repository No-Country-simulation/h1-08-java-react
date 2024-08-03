package io.hackathon.justina.treatment.helper;

import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineMinRes;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineReq;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMinRes;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionReq;

import java.util.Collections;
import java.util.List;

public class PrescriptionMapper {

    public static PrescriptionMinRes toPrescriptionMinRes(Prescription prescription) {
        if (prescription == null) {
            return null;
        }
        return PrescriptionMinRes.builder()
                .id(prescription.getId())
                .prescriptionMedicines(convertToPrescriptionMedicineMinRes(prescription.getPrescriptionMedicines()))
                .build();
    }

    public static Prescription toPrescription(PrescriptionReq prescriptionReq) {
        return Prescription.builder()
                .prescriptionMedicines(convertToPrescriptionMedicines(prescriptionReq.getMedicines()))
                .build();


    }

    private static List<PrescriptionMedicineMinRes> convertToPrescriptionMedicineMinRes(List<PrescriptionMedicine> prescriptionMedicines) {
        if (prescriptionMedicines == null) {
            return Collections.emptyList();
        }
        return prescriptionMedicines.stream().map(PrescriptionMedicineMapper::toPrescriptionMedicineMinRes).toList();
    }

    private static List<PrescriptionMedicine> convertToPrescriptionMedicines(List<PrescriptionMedicineReq> prescriptionMedicines) {
        return prescriptionMedicines.stream().map(PrescriptionMedicineMapper::toPrescriptionMedicine).toList();
    }
}
