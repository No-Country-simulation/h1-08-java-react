package io.hackathon.justina.doctor.controllers.v1;

import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.models.dto.DoctorReqUpdate;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import io.hackathon.justina.patient.model.dto.PatientMinRes;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/doctor")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorServicesImp doctorService;

    @GetMapping()
    public ResponseEntity<PagedModel<DoctorDTO>> getAll(@PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        try {
            PagedModel<DoctorDTO> doctorPage = new PagedModel<>(doctorService.findAll(pageable));
            return ResponseEntity.ok(doctorPage);
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDTO> getById(@PathVariable Long id) {
        DoctorDTO doctorDTO = doctorService.findById(id);
        if (doctorDTO != null) {
            return ResponseEntity.ok(doctorDTO);

        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<DoctorDTO> getByEmail(@PathVariable String email) {
        DoctorDTO doctorDTO = doctorService.findByEmail(email);
        if (doctorDTO != null) {
            return ResponseEntity.ok(doctorDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/dni/{dni}")
    public ResponseEntity<DoctorDTO> getByDni(@PathVariable String dni) {
        DoctorDTO doctorDTO = doctorService.findByDni(dni);
        if (doctorDTO != null) {
            return ResponseEntity.ok(doctorDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/patients")
    public ResponseEntity<PagedModel<PatientMinRes>> getPatientsByDoctorId(@PathVariable Long id, @PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        try {
            PagedModel<PatientMinRes> doctorPage = new PagedModel<>(doctorService.findPatientsByDoctorId(id, pageable));
            if (doctorPage.getContent().isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(doctorPage);
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<DoctorDTO> save(@Valid @RequestBody DoctorDTO doctorDTO) {
        try {
            return ResponseEntity.ok(doctorService.save(DoctorMapper.toMedico(doctorDTO)));
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<DoctorDTO> update(@Valid @RequestBody DoctorReqUpdate doctorDTO, @PathVariable Long id) {
        try {
            return ResponseEntity.ok(doctorService.update(id, DoctorMapper.toMedico(doctorDTO)));
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            doctorService.delete(id);
            return ResponseEntity.ok().build();
        } catch (UsernameNotFoundException e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
