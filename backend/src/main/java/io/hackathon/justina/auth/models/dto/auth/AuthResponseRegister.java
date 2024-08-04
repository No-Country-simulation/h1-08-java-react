package io.hackathon.justina.auth.models.dto.auth;

import io.hackathon.justina.auth.models.AuthResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponseRegister<T> extends AuthResponse {

    private T data;

    public AuthResponseRegister(String token, T data) {
        super(token);
        this.data = data;
    }
}
