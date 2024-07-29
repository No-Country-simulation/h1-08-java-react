package io.hackathon.justina.utils.Enums;

public enum HTMLSize {
    SMALL("6"),
    MEDIUM("3"),
    LARGE("1");

    private final String value;

    private HTMLSize(String value) {
        this.value = value;
    }

    public static HTMLSize fromString(String text) {
        return valueOf(text.toUpperCase());
    }

    public String getValue() {
        return this.value;
    }

}
