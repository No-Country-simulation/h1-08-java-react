package io.hackathon.justina.user.services.implementation;

import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.modelMapper.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServicesImp {
    private final DoctorServicesImp doctorServices;
    private final PatientServicesImp patientServices;
    private final Mapper mapper = Mapper.getInstance();

    public Usuario getUserByUsername(String username) {
        try {
            if (username == null || username.isEmpty()) {
                throw new UsernameNotFoundException("El dni no puede ser vacio");
            }
            System.out.println(username);

            if (username.contains(Patient.class.getSimpleName() + ":")) {
                return getPatientUser(username);
            } else if (username.contains(Medico.class.getSimpleName() + ":")) {
                return getDoctorUser(username);
            }

            return null;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    private Usuario getPatientUser(String username) {
        String dni = username.replace(Patient.class.getSimpleName() + ":", "");
        Patient patient = patientServices.findByDni(dni);
        if (patient != null) {
            return mapper.map(patient, Usuario.class).orElse(null);
        }
        throw new UsernameNotFoundException("No se encontro el paciente con el dni: " + dni);
    }

    private Usuario getDoctorUser(String username) {
        String licence = username.replace(Medico.class.getSimpleName() + ":", "");
        Medico doctor = doctorServices.findByLicenseNumber(Integer.parseInt(licence));
        if (doctor != null) {
            return mapper.map(doctor, Usuario.class).orElse(null);
        }
        throw new UsernameNotFoundException("No se encontro el medico con el dni: " + licence);
    }

}