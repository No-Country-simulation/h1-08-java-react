package io.hackathon.justina.auth.AuthQR.model.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class QRRequest {
    @NotNull(message = "El id del paciente es requerido")
    private Long id;
}
