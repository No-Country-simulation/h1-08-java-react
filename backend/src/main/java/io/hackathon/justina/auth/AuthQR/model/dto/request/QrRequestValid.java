package io.hackathon.justina.auth.AuthQR.model.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QrRequestValid {
    private String token;
    private Long doctorId;
}
