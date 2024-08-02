package io.hackathon.justina.clinicHistory.helper;

import io.hackathon.justina.clinicHistory.model.ClinicHistory;
import io.hackathon.justina.clinicHistory.model.dto.request.ClinicHistoryReq;
import io.hackathon.justina.clinicHistory.model.dto.response.ClinicHistoryRes;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.treatment.helper.TreatmentMapper;


public class ClinicHistoryMapper {

    public static ClinicHistory toClinicHistory(ClinicHistoryReq entity) {
        if (entity == null) {
            return null;
        }
        Patient patient = new Patient();
        patient.setId(entity.getPatient());

        Medico doctor = new Medico();
        doctor.setId(entity.getDoctor());

        return ClinicHistory.builder()
                .patient(patient)
                .doctor(doctor)
                .medicalHistory(entity.getMedicalHistory())
                .familyBackground(entity.getFamilyBackground())
                .diagnosis(entity.getDiagnosis())
                .studies(entity.getStudies())
                .treatment(TreatmentMapper.toTreatment(entity.getTreatment())).build();
    }

    public static ClinicHistoryRes toResponse(ClinicHistory entity) {
        if (entity == null) {
            return null;
        }
        return ClinicHistoryRes.builder()
                .id(entity.getId())
                .patient(PatientMapper.toPatientMinRes(entity.getPatient()))
                .doctor(entity.getDoctor().getId())
                .medicalHistory(entity.getMedicalHistory())
                .familyBackground(entity.getFamilyBackground())
                .diagnosis(entity.getDiagnosis())
                .studies(entity.getStudies())
                .treatment(TreatmentMapper.toTreatmentRes(entity.getTreatment())).build();
    }

}
