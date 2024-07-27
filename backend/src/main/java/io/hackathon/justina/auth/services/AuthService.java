package io.hackathon.justina.auth.services;

import io.hackathon.justina.auth.JWT.Services.JwtService;
import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.auth.AuthResponseRegister;
import io.hackathon.justina.auth.models.dto.request.LoginDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.utils.Role;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final PatientServicesImp patientServices;
    private final DoctorServicesImp doctorServices;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public <T, R> AuthResponseRegister<T> login(@NotNull R request, Class<?> clazz) {
        String className = clazz.getSimpleName();
        String credentials;
        String password;
        Role role;
        if (clazz.equals(Patient.class) && request instanceof LoginRequest) {
            credentials = ((LoginRequest) request).getDni();
            password = ((LoginRequest) request).getPassword();
            role = Role.PATIENT;
        } else if (clazz.equals(Medico.class) && request instanceof LoginDoctorRequest) {
            credentials = ((LoginDoctorRequest) request).getLicenseNumber().toString();
            password = ((LoginDoctorRequest) request).getPassword();
            role = Role.DOCTOR;
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(className + ":" + credentials, password));
        UserDetails userDetails = User.builder().username(credentials).password(password).authorities(role.getAuthority()).build();

        String token = jwtService.getToken(userDetails);
        T data = getUserData(credentials, clazz);

        return new AuthResponseRegister<>(token, data);
    }

    private <T> T getUserData(String credentials, Class<?> clazz) {
        if (clazz.equals(Patient.class)) {
            Patient patient = patientServices.findByDni(credentials);
            if (patient != null) {
                return (T) PatientMapper.toPatientDTO(patient);
            }
        } else if (clazz.equals(Medico.class)) {
            Medico doctor = doctorServices.findByLicenseNumber(Integer.parseInt(credentials));
            if (doctor != null) {
                return (T) DoctorMapper.toMedicoDto(doctor);
            }
        }
        throw new RuntimeException("Usuario no encontrado o no puede asignar datos de usuario");

    }

    public AuthResponse createPatient(RegisterPatientRequest request) {
        try {
            Patient patient = PatientMapper.toPatient(request);
            patient.setPassword(passwordEncoder.encode(request.getPassword()));
            patientServices.save(patient);
            return AuthResponse.builder().token(jwtService.getToken(patient)).build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    public AuthResponse createDoctor(RegisterDoctorRequest request) {
        try {
            Medico medico = DoctorMapper.toMedico(request);
            medico.setPassword(passwordEncoder.encode(request.getPassword()));
            doctorServices.save(medico);
            return AuthResponse.builder().token(jwtService.getToken(medico)).build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}