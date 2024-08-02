package io.hackathon.justina.medicines.services;

import io.hackathon.justina.medicines.helper.MedicineMapper;
import io.hackathon.justina.medicines.model.dto.MedicinesRes;
import io.hackathon.justina.medicines.repository.MedicinesRepository;
import io.hackathon.justina.treatment.prescription.repository.PrescriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicinesServices {
    private final MedicinesRepository medicinesRepository;
    private final PrescriptionRepository prescriptionRepository;

    public Page<MedicinesRes> findAll(Pageable pageable) {
        return medicinesRepository.findAll(pageable).map(MedicineMapper::toMedicinesRes);
    }

    public MedicinesRes findByCode(Long code) {
        return MedicineMapper.toMedicinesRes(medicinesRepository.findByCode(code));
    }

    public MedicinesRes findById(Long id) {
        return MedicineMapper.toMedicinesRes(medicinesRepository.findById(id).get());
    }

    public MedicinesRes finedByLab(Long id) {
        return MedicineMapper.toMedicinesRes(medicinesRepository.findByLaboratoryId(id));
    }

    public List<MedicinesRes> finedByPatientId(Long patientId) {
        //return prescriptionRepository.findAllMedicinesByPatientId(patientId).stream().map(MedicineMapper::toMedicinesRes).toList();
        return null;
    }

}
