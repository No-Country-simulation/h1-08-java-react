package io.hackathon.justina.treatment.prescription.model.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
@Builder
public class PrescriptionMinRes {

    private Long id;

    private Set<PrescriptionMedicineMinRes> prescriptionMedicines;
}
