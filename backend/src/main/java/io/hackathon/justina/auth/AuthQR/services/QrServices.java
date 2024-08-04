package io.hackathon.justina.auth.AuthQR.services;

import io.hackathon.justina.auth.AuthQR.Utils.Hash;
import io.hackathon.justina.auth.AuthQR.model.QrModel;
import io.hackathon.justina.auth.AuthQR.repository.QrRepository;
import io.hackathon.justina.patient.services.PatientServicesImp;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QrServices {

    private final QrRepository qrRepository;
    private final PatientServicesImp patientServicesImp;

    public Optional<QrModel> createQrForPatient(Long id) throws NoSuchAlgorithmException {
        String dni = patientServicesImp.findById(id).getDni();
        if (dni != null) {
            return Optional.of(createQr(dni));
        }
        return Optional.empty();
    }

    public QrModel createQr(String key) throws NoSuchAlgorithmException {
        String hash = Hash.getHash(key);
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expiresAt = now.plusHours(1);

        Optional<QrModel> existingQr = qrRepository.findByDni(key);
        if (existingQr.isPresent()) {
            QrModel qrModel = existingQr.get();
            if (!qrModel.isUsed() && qrModel.getExpiresAt().isAfter(LocalDateTime.now())) {
                return qrModel;
            } else {
                qrRepository.delete(qrModel);
            }
        }

        QrModel qr = QrModel.builder()
                .dni(key)
                .hash(hash)
                .isUsed(false)
                .createdAt(now)
                .expiresAt(expiresAt)
                .build();

        return qrRepository.save(qr);
    }

    public Optional<QrModel> validateQr(String hash) {
        Optional<QrModel> qr = qrRepository.findByHash(hash);
        if (qr.isPresent()) {
            QrModel qrModel = qr.get();
            if (!qrModel.isUsed() && qrModel.getExpiresAt().isAfter(LocalDateTime.now())) {
                qrModel.setUsed(true);
                qrRepository.save(qrModel);
                return Optional.of(qrModel);
            }
        }
        return Optional.empty();
    }

}
