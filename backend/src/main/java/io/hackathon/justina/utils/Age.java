package io.hackathon.justina.utils;

import java.time.LocalDate;
import java.time.Period;

public class Age {
    private Age() {
    }

    public static int calculateAge(LocalDate birthDate) {
        return Period.between(birthDate, LocalDate.now()).getYears();
    }
}
