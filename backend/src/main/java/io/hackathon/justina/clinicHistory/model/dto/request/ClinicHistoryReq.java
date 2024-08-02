package io.hackathon.justina.clinicHistory.model.dto.request;

import io.hackathon.justina.treatment.model.dto.request.TreatmentReq;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ClinicHistoryReq {

    @NotNull(message = "El id del paciente no puede ser nulo")
    private Long patient;

    @NotNull(message = "El id del doctor no puede ser nulo")
    private Long doctor;

    private String medicalHistory;

    private String familyBackground;

    private String diagnosis;

    private String studies;

    @NotNull(message = "El tratamiento no puede ser nulo")
    private TreatmentReq treatment;
}
