package io.hackathon.justina.treatment.prescription.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PrescriptionMedicineReq {

    @NotNull(message = "El medicamento no puede ser nulo, la id es obligatoria")
    private Long medicine;

    @NotBlank(message = "La dosis no puede ser vacía")
    private String dose;

    @NotNull(message = "La frecuencia no puede ser nula")
    private Integer frequency;

    @NotNull(message = "La fecha de inicio no puede ser nula")
    private LocalDate startDate;

    @NotNull(message = "La fecha de fin no puede ser nula")
    private LocalDate endDate;
}
