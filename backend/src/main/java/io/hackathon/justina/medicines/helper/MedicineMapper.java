package io.hackathon.justina.medicines.helper;

import io.hackathon.justina.medicines.model.Medicine;
import io.hackathon.justina.medicines.model.dto.MedicinesRes;

public class MedicineMapper {
    public static MedicinesRes toMedicinesRes(Medicine medicine) {
        if (medicine == null) {
            return null;
        }
        return MedicinesRes.builder()
                .id(medicine.getId())
                .code(medicine.getCode())
                .name(medicine.getName())
                .namePresentation(medicine.getNamePresentation())
                .activePrinciple(medicine.getActivePrinciple())
                .strength(medicine.getStrength().toString())
                .build();
    }
}
