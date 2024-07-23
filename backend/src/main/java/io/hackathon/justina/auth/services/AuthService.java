package io.hackathon.justina.auth.services;

import io.hackathon.justina.auth.JWT.Services.JwtService;
import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.dto.request.LoginRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterDoctorRequest;
import io.hackathon.justina.auth.models.dto.request.RegisterPatientRequest;
import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.patient.services.PatientServicesImp;
import io.hackathon.justina.user.model.Usuario;
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

    public AuthResponse login(@NotNull LoginRequest request, Class<?> clazz) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(String.valueOf(clazz.getSimpleName() + ":" + request.getDni()), request.getPassword()));
        UserDetails userDetails = User.builder()
                .username(request.getDni())
                .password(request.getPassword())
                .build();
        String token = jwtService.getToken(userDetails);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse createPatient(RegisterPatientRequest request) {
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

    public AuthResponse createDoctor(RegisterDoctorRequest request) {
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
