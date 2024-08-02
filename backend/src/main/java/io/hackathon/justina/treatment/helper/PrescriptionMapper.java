package io.hackathon.justina.treatment.helper;

import io.hackathon.justina.treatment.prescription.model.Prescription;
import io.hackathon.justina.treatment.prescription.model.PrescriptionMedicine;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineMinRes;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMedicineReq;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMinRes;
import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionReq;

import java.util.Set;
import java.util.stream.Collectors;

public class PrescriptionMapper {

    public static PrescriptionMinRes toPrescriptionMinRes(Prescription prescription) {

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

    private static Set<PrescriptionMedicineMinRes> convertToPrescriptionMedicineMinRes(Set<PrescriptionMedicine> prescriptionMedicines) {
        return prescriptionMedicines.stream().map(PrescriptionMedicineMapper::toPrescriptionMedicineMinRes).collect(Collectors.toSet());
    }

    private static Set<PrescriptionMedicine> convertToPrescriptionMedicines(Set<PrescriptionMedicineReq> prescriptionMedicines) {
        return prescriptionMedicines.stream().map(PrescriptionMedicineMapper::toPrescriptionMedicine).collect(Collectors.toSet());
    }
}
