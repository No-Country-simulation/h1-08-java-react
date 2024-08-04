package io.hackathon.justina.medicines.controllers;

import io.hackathon.justina.medicines.model.dto.MedicinesRes;
import io.hackathon.justina.medicines.services.MedicinesServices;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v1/medicines")
@RequiredArgsConstructor
public class MedicinesController {

    private final MedicinesServices medicinesServices;

    @GetMapping
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public ResponseEntity<PagedModel<MedicinesRes>> getAll(@PageableDefault(page = 0, size = 10, sort = "code") Pageable pageable) {
        return ResponseEntity.ok(new PagedModel<>(medicinesServices.findAll(pageable)));
    }

    @GetMapping("/code/{code}")
    public ResponseEntity<MedicinesRes> getByCode(@PathVariable Long code) {
        return ResponseEntity.ok(medicinesServices.findByCode(code));
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicinesRes> getById(@PathVariable Long id) {
        return ResponseEntity.ok(medicinesServices.findById(id));
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<List<MedicinesRes>> getByPatientId(@PathVariable Long id) {
        return ResponseEntity.ok(medicinesServices.finedByPatientId(id));
    }

}
