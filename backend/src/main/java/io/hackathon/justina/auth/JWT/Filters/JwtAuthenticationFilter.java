package io.hackathon.justina.auth.JWT.Filters;

import io.hackathon.justina.auth.JWT.Services.JwtService;
import io.hackathon.justina.doctor.models.Medico;
import io.hackathon.justina.patient.model.Patient;
import io.hackathon.justina.utils.Enums.Role;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    private String getTokenFromRequest(HttpServletRequest request) {
        final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (StringUtils.hasText(header) && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String token = getTokenFromRequest(request);
        String username;

        if (token != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            try {
                username = jwtService.getCredentialFromJwtToken(token);

                if (username != null) {

                    try {
                        Claims claims = jwtService.getAllClaims(token);
                        String authorities = (String) ((List<?>) claims.get("role")).stream().toList().get(0);
                        Class<?> clazz = Role.valueOf(authorities) == Role.PATIENT ? Patient.class : Medico.class;

                        username = clazz.getSimpleName() + ":" + username;
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }

                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                    if (jwtService.validateToken(token, userDetails)) {
                        UsernamePasswordAuthenticationToken authToken =
                                new UsernamePasswordAuthenticationToken(userDetails.getUsername(), null, userDetails.getAuthorities());

                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
            } catch (Exception e) {
                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.getWriter().write("{\"error\":\"Unauthorized\", \"message\":\"" + e.getMessage() + "\"}");
                return;
            }
        }
        filterChain.doFilter(request, response);
    }
}
