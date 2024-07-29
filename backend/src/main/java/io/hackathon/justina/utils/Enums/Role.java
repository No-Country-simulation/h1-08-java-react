package io.hackathon.justina.utils.Enums;

public enum Role {
    DOCTOR, PATIENT;

    public String getAuthority() {
        return name();
    }

    public static Role fromAuthority(String authority) {
        return Role.valueOf(authority);
    }
}
