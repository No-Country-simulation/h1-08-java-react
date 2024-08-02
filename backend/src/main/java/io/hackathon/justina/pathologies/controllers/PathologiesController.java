package io.hackathon.justina.pathologies.controllers;

import io.hackathon.justina.pathologies.model.dto.response.PathologiesRes;
import io.hackathon.justina.pathologies.services.PathologiesServices;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pathologies")
@RequiredArgsConstructor
public class PathologiesController {
    private final PathologiesServices pathologiesServices;


    @GetMapping
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public ResponseEntity<PagedModel<PathologiesRes>> getAll(Pageable pageable) {
        return ResponseEntity.ok(new PagedModel<>(pathologiesServices.findAll(pageable)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PathologiesRes> getById(@PathVariable Long id) {
        return ResponseEntity.ok(pathologiesServices.findById(id));
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<List<PathologiesRes>> getByPatientId(@PathVariable Long id) {
        return ResponseEntity.ok(pathologiesServices.finedByPatientId(id));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable Long id) {
        pathologiesServices.delete(id);
    }

}
