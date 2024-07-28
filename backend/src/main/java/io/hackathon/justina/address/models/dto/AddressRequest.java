package io.hackathon.justina.address.models.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AddressRequest {
    @NotBlank(message = "El pais es obligatorio")
    @Size(min = 3, max = 50, message = "El pais no puede tener menos de 3 caracteres ni más de 50 caracteres")
    private String country;

    @Pattern(regexp = "^[a-zA-Z ñÑ]+$", message = "La provincia solo debe contener letras")
    @Size(min = 3, max = 30, message = "La provincia no puede tener menos de 3 caracteres ni más de 50 caracteres")
    private String province;

    @Pattern(regexp = "^[a-zA-Z ñÑ]+$", message = "La ciudad solo debe contener letras")
    @Size(min = 3, max = 50, message = "La ciudad no puede tener menos de 3 caracteres ni más de 50 caracteres")
    private String city;

    @Pattern(regexp = "^[a-zA-Z ñÑ]+$", message = "La ciudad solo debe contener letras")
    @Size(min = 3, max = 50, message = "La calle no puede tener menos de 3 caracteres ni más de 50 caracteres")
    private String street;
}
