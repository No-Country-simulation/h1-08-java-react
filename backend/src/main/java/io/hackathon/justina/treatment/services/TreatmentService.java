package io.hackathon.justina.treatment.services;

import io.hackathon.justina.treatment.helper.TreatmentMapper;
import io.hackathon.justina.treatment.model.dto.request.TreatmentReq;
import io.hackathon.justina.treatment.model.dto.response.TreatmentRes;
import io.hackathon.justina.treatment.repository.TreatmentRepository;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TreatmentService implements IBaseCRUDServices<TreatmentRes, TreatmentReq> {

    private final TreatmentRepository treatmentRepository;

    @Override
    public Page<TreatmentRes> findAll(Pageable pageable) {
        return treatmentRepository.findAll(pageable).map(TreatmentMapper::toTreatmentRes);
    }

    @Override
    public TreatmentRes findById(Long id) {
        return TreatmentMapper.toTreatmentRes(treatmentRepository.findById(id).orElse(null));
    }

    @Override
    public boolean existsById(Long id) {
        return treatmentRepository.existsById(id);
    }

    @Override
    public TreatmentRes save(TreatmentReq entity) {
        return null;
    }

    @Override
    public TreatmentRes update(TreatmentReq entity) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
