package io.hackathon.justina.auth.services;

import io.hackathon.justina.auth.JWT.Services.JwtService;
import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterRequest;
import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import lombok.RequiredArgsConstructor;
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

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails userDetails = User.builder()
                .username(request.getEmail())
                .password(request.getPassword())
                .build();
        String token = jwtService.getToken(userDetails);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse register(RegisterRequest request) {
        try {
            return switch (request.getRole()) {
                case DOCTOR -> createDoctor(request);
                case PATIENT -> createPatient(request);
                default -> throw new IllegalArgumentException("El rol debe ser doctor o paciente");
            };
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    private AuthResponse createPatient(RegisterRequest request) {
        try {
            Patient patient = PatientMapper.toPatient(request);
            patient.setPassword(passwordEncoder.encode(request.getPassword()));
            patientServices.save(patient);
            return AuthResponse.builder()
                    .token(jwtService.getToken(patient))
                    .build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    private AuthResponse createDoctor(RegisterRequest request) {
        try {
            Medico medico = DoctorMapper.toMedico(request);
            medico.setPassword(passwordEncoder.encode(request.getPassword()));
            doctorServices.save(medico);
            return AuthResponse.builder()
                    .token(jwtService.getToken(medico))
                    .build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
