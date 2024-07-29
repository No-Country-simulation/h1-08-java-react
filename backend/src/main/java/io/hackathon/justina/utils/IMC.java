package io.hackathon.justina.utils;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class IMC {
    private static final BigDecimal NORMAL_AVERAGE_BMI = BigDecimal.valueOf(22);

    private IMC() {
    }

    public static boolean isNormal(BigDecimal imc) {
        return imc.compareTo(NORMAL_AVERAGE_BMI) <= 0;
    }

    public static double calculateBMI(double weight, double height) {
        BigDecimal weightDecimal = BigDecimal.valueOf(weight);
        BigDecimal heightDecimal = BigDecimal.valueOf(height);
        BigDecimal heightSquared = heightDecimal.multiply(heightDecimal);

        BigDecimal bmi = weightDecimal.divide(heightSquared, 2, RoundingMode.HALF_UP);

        return bmi.doubleValue();
    }

}
