package io.hackathon.justina.user.services.implementation;

import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.user.model.Usuario;
import io.hackathon.justina.utils.modelMapper.Mapper;
import jakarta.persistence.EntityNotFoundException;
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

            if (username.contains(Patient.class.getSimpleName() + ":")) {
                return getPatientUser(username);
            } else if (username.contains(Medico.class.getSimpleName() + ":")) {
                return getDoctorUser(username);
            }

            return null;
        } catch (RuntimeException e) {
            if (e instanceof UsernameNotFoundException) {
                throw new EntityNotFoundException(e.getMessage());
            }
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
        Medico doctor = doctorServices.findByLicenseNumber(licence);
        if (doctor != null) {
            return DoctorMapper.toUsuario(doctor);
        }
        throw new UsernameNotFoundException("No se encontro el medico con la licencia: " + licence);
    }

}
