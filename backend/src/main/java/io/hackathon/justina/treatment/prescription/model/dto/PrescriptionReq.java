package io.hackathon.justina.treatment.prescription.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PrescriptionReq {

    private Set<PrescriptionMedicineReq> medicines;

}
