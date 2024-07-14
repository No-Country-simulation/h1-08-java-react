package io.hackathon.justina.auth.services;

import io.hackathon.justina.JWT.Services.JwtService;
import io.hackathon.justina.auth.models.AuthResponse;
import io.hackathon.justina.auth.models.request.LoginRequest;
import io.hackathon.justina.auth.models.request.RegisterRequest;
import io.hackathon.justina.auth.models.auth.EmailPasswordAuthenticationToken;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    //private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new EmailPasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails userDetails = (UserDetails) User.builder()
                .username(request.getEmail())
                .password(request.getPassword())
                .build();
        String token = jwtService.getToken(userDetails);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse register(RegisterRequest request){
        User user = (User) User.builder()
                .username(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}
