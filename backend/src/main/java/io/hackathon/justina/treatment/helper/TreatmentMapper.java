package io.hackathon.justina.treatment.helper;

import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.treatment.model.Treatment;
import io.hackathon.justina.treatment.model.dto.request.TreatmentReq;
import io.hackathon.justina.treatment.model.dto.response.TreatmentRes;

public class TreatmentMapper {

    public static TreatmentRes toTreatmentRes(Treatment entity) {
        if (entity == null) {
            return null;
        }
        String pathologyName = "";
        if (entity.getPathology() != null) {
            pathologyName = entity.getPathology().getName();
        }
        return TreatmentRes.builder()
                .id(entity.getId())
                .pathology(pathologyName)
                .prescription(entity.getPrescription() != null ? PrescriptionMapper.toPrescriptionMinRes(entity.getPrescription()) : null)
                .description(entity.getDescription())
                .status(entity.getStatus()).build();
    }

    public static Treatment toTreatment(TreatmentReq treatment) {
        return Treatment.builder()
                .pathology(new Pathology(treatment.getPathology()))
                .prescription(PrescriptionMapper.toPrescription(treatment.getPrescription()))
                .description(treatment.getDescription())
                .status(treatment.getStatus()).build();
    }

}
