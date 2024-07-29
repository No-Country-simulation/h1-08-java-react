package io.hackathon.justina.doctor.controllers.v1;

import io.hackathon.justina.doctor.models.dto.DoctorDTO;
import io.hackathon.justina.doctor.services.DoctorServicesImp;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/doctor")
@RequiredArgsConstructor
public class DoctorController {

    private final DoctorServicesImp doctorService;

    @GetMapping()
    public ResponseEntity<PagedModel<DoctorDTO>> getAll(@PageableDefault(page = 0, size = 10, sort = "id") Pageable pageable) {
        try {
            return ResponseEntity.ok(new PagedModel<>( doctorService.findAll(pageable)));
        }catch (DataAccessException e){
            return ResponseEntity.notFound().build();
        }
    }


}
