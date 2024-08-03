package io.hackathon.justina.treatment.prescription.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PrescriptionReq {

    private List<PrescriptionMedicineReq> medicines;

}
