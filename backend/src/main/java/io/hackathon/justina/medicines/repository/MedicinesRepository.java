package io.hackathon.justina.medicines.repository;

import io.hackathon.justina.medicines.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicinesRepository extends JpaRepository<Medicine, Long> {

    Medicine findByCode(Long code);

    Medicine findByLaboratoryId(Long id);
}
