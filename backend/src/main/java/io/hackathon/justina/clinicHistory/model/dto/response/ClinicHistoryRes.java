package io.hackathon.justina.clinicHistory.model.dto.response;

import io.hackathon.justina.patient.model.dto.PatientMinRes;
import io.hackathon.justina.treatment.model.dto.request.TreatmentReq;
import io.hackathon.justina.treatment.model.dto.response.TreatmentRes;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClinicHistoryRes {

    private Long id;

    private PatientMinRes patient;

    private Long doctor;

    private String medicalHistory;

    private String familyBackground;

    private String diagnosis;

    private String studies;

    private TreatmentRes treatment;


}
