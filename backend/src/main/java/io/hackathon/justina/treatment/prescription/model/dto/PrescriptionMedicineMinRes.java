package io.hackathon.justina.treatment.prescription.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PrescriptionMedicineMinRes {

    private Long medicine;

    private String dose;

}
