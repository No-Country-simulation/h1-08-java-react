package io.hackathon.justina.treatment.model.dto.response;

import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionMinRes;
import io.hackathon.justina.utils.Enums.TreatmentStatus;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TreatmentRes {

    private Long id;

    private String pathology;

    private PrescriptionMinRes prescription;

    private String description;

    private TreatmentStatus status;
}
