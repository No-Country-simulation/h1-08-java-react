package io.hackathon.justina.auth.AuthQR.model.dto.response;

import io.hackathon.justina.patient.model.dto.PatientMinRes;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QrResponseValid {
    private PatientMinRes patient;
}
