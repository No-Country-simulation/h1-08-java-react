package io.hackathon.justina.auth.models.dto.auth;

import lombok.Data;

@Data
public class AuthResponseRegister<T> {

    private String token;
    private T data;

    public AuthResponseRegister(String token, T data) {
        this.token = token;
        this.data = data;
    }
}
