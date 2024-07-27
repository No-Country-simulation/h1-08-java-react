package io.hackathon.justina.patient.controllers.v1;

import io.hackathon.justina.patient.helper.PatientMapper;
import io.hackathon.justina.patient.model.dto.PatientDTO;
import io.hackathon.justina.patient.model.dto.PatientRequest;
import io.hackathon.justina.patient.services.PatientServicesImp;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/patient")
@RequiredArgsConstructor
public class PatientController {
    private final PatientServicesImp patientControllerService;

    @GetMapping()
    public ResponseEntity<PagedModel<PatientDTO>> getAll(@PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        try {
            return ResponseEntity.ok(new PagedModel<>(patientControllerService.findAll(pageable)));
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(patientControllerService.findById(id));
    }

    @GetMapping("/dni/{dni}")
    public ResponseEntity<PatientDTO> getByDni(@RequestParam String dni) {
        return ResponseEntity.ok(patientControllerService.PatientDTOFindByDni(dni));
    }

    @PutMapping
    public ResponseEntity<PatientDTO> update(@RequestBody PatientRequest patient) {
        return ResponseEntity.ok(patientControllerService.update(PatientMapper.toPatient(patient)));
    }

    @PatchMapping
    public ResponseEntity<PatientDTO> partialUpdate(@RequestBody PatientRequest patient) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PatientDTO> delete(@PathVariable Long id) {
        patientControllerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
