package io.hackathon.justina.auth.models.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String country;
}
