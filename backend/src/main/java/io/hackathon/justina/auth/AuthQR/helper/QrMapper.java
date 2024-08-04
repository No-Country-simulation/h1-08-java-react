package io.hackathon.justina.auth.AuthQR.helper;

import io.hackathon.justina.auth.AuthQR.model.QrModel;
import io.hackathon.justina.auth.AuthQR.model.dto.response.QRResponse;

public class QrMapper {

    public static QRResponse toQRResponse(QrModel qrModel) {
        return QRResponse.builder()
                .token(qrModel.getHash())
                .build();
    }
}
