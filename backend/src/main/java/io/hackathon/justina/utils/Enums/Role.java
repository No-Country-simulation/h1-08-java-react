package io.hackathon.justina.utils.Enums;

public enum Role {
    DOCTOR, PATIENT;

    public static Role fromAuthority(String authority) {
        return Role.valueOf(authority.toUpperCase());
    }

    public String getAuthority() {
        return name();
    }
}
