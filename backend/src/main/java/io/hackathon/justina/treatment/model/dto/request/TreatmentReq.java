package io.hackathon.justina.treatment.model.dto.request;

import io.hackathon.justina.treatment.prescription.model.dto.PrescriptionReq;
import io.hackathon.justina.utils.Enums.TreatmentStatus;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentReq {

    @Size(min = 1, max = 500, message = "La descripción debe tener entre 1 y 500 caracteres")
    private String description;

    @NotNull(message = "La patología es obligatoria")
    private Long pathology;

    private PrescriptionReq prescription;

    private TreatmentStatus status;
}
