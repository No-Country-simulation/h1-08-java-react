package io.hackathon.justina.utils;

import java.time.LocalDate;
import java.util.Calendar;

public class Age {
    public static int calculateAge(LocalDate birthdate) {
        return Calendar.getInstance().get(Calendar.YEAR) - birthdate.getYear();
    }
}
