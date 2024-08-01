package io.hackathon.justina.patient.services.interfaces;

import io.hackathon.justina.patient.model.dto.PatientDTO;

public interface PatientService {

    PatientDTO getInfoPatientById(Long id);
}
