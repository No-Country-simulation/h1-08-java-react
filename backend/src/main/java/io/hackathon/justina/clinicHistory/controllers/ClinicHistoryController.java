package io.hackathon.justina.clinicHistory.controllers;

import io.hackathon.justina.clinicHistory.model.dto.request.ClinicHistoryReq;
import io.hackathon.justina.clinicHistory.model.dto.response.ClinicHistoryRes;
import io.hackathon.justina.clinicHistory.services.ClinicHistoryServices;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/clinic-history")
@RequiredArgsConstructor
public class ClinicHistoryController {

    private final ClinicHistoryServices clinicHistoryServices;

    @GetMapping()
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<PagedModel<ClinicHistoryRes>> findAll(@PageableDefault(page = 0, size = 10, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(new PagedModel<>(clinicHistoryServices.findAll(pageable)));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('DOCTOR')")
    public ClinicHistoryRes findById(@PathVariable Long id) {
        return clinicHistoryServices.findById(id);
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<PagedModel<ClinicHistoryRes>> findAllByPatientId(@PathVariable Long id, @PageableDefault(page = 0, size = 10, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(new PagedModel<>(clinicHistoryServices.findAllByPatientId(id, pageable)));
    }

    @PostMapping
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<ClinicHistoryRes> save(@Valid @RequestBody ClinicHistoryReq entity) {
        return ResponseEntity.ok(clinicHistoryServices.save(entity));
    }

    @PutMapping
    public ResponseEntity<ClinicHistoryRes> update(@Valid @RequestBody ClinicHistoryReq entity) {
        return ResponseEntity.ok(clinicHistoryServices.update(entity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            clinicHistoryServices.delete(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
