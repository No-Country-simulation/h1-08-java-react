package io.hackathon.justina.treatment.prescription.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class PrescriptionMinRes {

    private Long id;

    private List<PrescriptionMedicineMinRes> prescriptionMedicines;
}
