package io.hackathon.justina.user.services.implementation;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.user.model.Usuario;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServicesImp {
    private final DoctorServicesImp doctorServices;
    private final PatientServicesImp patientServices;

    public Usuario getUserByUsername(String username) {
        try {
            if (username == null) {
                return null;
            }
            Medico doctor = doctorServices.findByEmail(username);
            if (doctor != null) {
                return Usuario.map(doctor).orElse(null);
            }

            Patient patient = patientServices.findByEmail(username);
            if (patient != null) {
                return Usuario.map(patient).orElse(null);
            }

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
