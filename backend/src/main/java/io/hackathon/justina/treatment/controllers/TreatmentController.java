package io.hackathon.justina.treatment.controllers;

import io.hackathon.justina.treatment.model.dto.response.TreatmentRes;
import io.hackathon.justina.treatment.services.TreatmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/treatment")
@RequiredArgsConstructor
public class TreatmentController {
    private final TreatmentService treatmentService;

    @GetMapping
    public ResponseEntity<PagedModel<TreatmentRes>> getAll(@PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        return ResponseEntity.ok(new PagedModel<>(treatmentService.findAll(pageable)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<TreatmentRes> getById(@PathVariable Long id) {
        TreatmentRes treatmentRes = treatmentService.findById(id);
        if (treatmentRes == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(treatmentRes);
    }

}
