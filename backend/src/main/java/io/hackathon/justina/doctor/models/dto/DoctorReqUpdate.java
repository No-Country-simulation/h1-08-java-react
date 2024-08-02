package io.hackathon.justina.doctor.models.dto;

import io.hackathon.justina.address.models.dto.AddressRequest;
import io.hackathon.justina.utils.Enums.Genders;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
public class DoctorReqUpdate {

    @Pattern(regexp = "^[a-zA-Z ´¨'\\-ñÑüÜáéíóú]+$", message = "El nombre solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ")
    private String name;

    @Pattern(regexp = "^[a-zA-Z ´¨'\\-ñÑüÜáéíóú]+$", message = "El apellido solo debe contener letras y los siguientes caracteres: ´ ≠'\\-ñÑ")
    private String lastName;

    @Size(min = 8, max = 8, message = "El dni debe tener 8 dígitos")
    private String dni;

    @Email(message = "El email debe ser válido")
    private String email;

    private AddressRequest address;

    @Past(message = "La fecha de nacimiento debe ser una fecha pasada")
    private LocalDate birthdate;

    @Size(min = 8, max = 14, message = "El teléfono debe tener entre 8 y 14 dígitos")
    @Pattern(regexp = "[0-9]+", message = "El telfoon solo debe contener dígitos")
    private String phoneNumber;

    private Genders gender;

    private EspecialidadRequest speciality;

    @Size(min = 4, max = 6, message = "la matricula debe tener entre 4 y 6 dígitos")
    @Pattern(regexp = "[0-9]+", message = "la matricula solo debe contener dígitos")
    private String licenseNumber;

}
