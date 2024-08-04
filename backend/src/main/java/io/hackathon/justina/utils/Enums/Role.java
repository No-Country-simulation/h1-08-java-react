package io.hackathon.justina.utils.Enums;

public enum Role {
    ROLE_ADMIN,
    ROLE_PATIENT,
    ROLE_DOCTOR;

    public static Role fromAuthority(String authority) {
        return Role.valueOf(authority.toUpperCase());
    }

    public String getAuthority() {
        return name();
    }
}
