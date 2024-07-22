package io.hackathon.justina.user.services.implementation;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServicesImp {
    private final DoctorServicesImp doctorServices;
    private final PatientServicesImp patientServices;
    private final Mapper mapper = Mapper.getInstance();

    public Usuario getUserByUsername(String username) {
        try {
            if (username == null) {
                return null;
            }
            Medico doctor = doctorServices.findByDni(username);
            if (doctor != null) {
                return mapper.map(doctor, Usuario.class).orElse(null);
            }

            Patient patient = patientServices.findByDni(username);
            if (patient != null) {
                return mapper.map(patient, Usuario.class).orElse(null);
            }

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
