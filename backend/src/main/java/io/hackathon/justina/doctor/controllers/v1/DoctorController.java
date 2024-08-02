package io.hackathon.justina.doctor.controllers.v1;

import io.hackathon.justina.doctor.helper.DoctorMapper;
import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/doctor")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorServicesImp doctorService;

    @GetMapping()
    public ResponseEntity<PagedModel<DoctorDTO>> getAll(@PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        try {
            return ResponseEntity.ok(new PagedModel<>(doctorService.findAll(pageable)));
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDTO> getById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(doctorService.findById(id));
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<DoctorDTO> getByEmail(@PathVariable String email) {
        try {
            return ResponseEntity.ok(doctorService.findByEmail(email));
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/dni/{dni}")
    public ResponseEntity<DoctorDTO> getByDni(@PathVariable String dni) {
        try {
            return ResponseEntity.ok(doctorService.findByDni(dni));
        } catch (DataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<DoctorDTO> save(@RequestBody DoctorDTO doctorDTO) {
        try {
            return ResponseEntity.ok(doctorService.save(DoctorMapper.toMedico(doctorDTO)));
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/update")
    public ResponseEntity<DoctorDTO> update(@RequestBody DoctorDTO doctorDTO) {
        try {
            return ResponseEntity.ok(doctorService.update(DoctorMapper.toMedico(doctorDTO)));
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            doctorService.delete(id);
            return ResponseEntity.ok().build();
        } catch (DataAccessException e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
