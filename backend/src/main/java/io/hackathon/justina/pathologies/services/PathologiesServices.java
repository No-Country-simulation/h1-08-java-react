package io.hackathon.justina.pathologies.services;

import io.hackathon.justina.pathologies.helper.PathologyMapper;
import io.hackathon.justina.pathologies.model.Pathology;
import io.hackathon.justina.pathologies.model.dto.request.PathologiesReq;
import io.hackathon.justina.pathologies.model.dto.response.PathologiesRes;
import io.hackathon.justina.pathologies.repository.PathologyRepository;
import io.hackathon.justina.utils.genInterface.IBaseCRUDServices;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PathologiesServices implements IBaseCRUDServices<PathologiesRes, PathologiesReq> {
    private final PathologyRepository pathologyRepository;

    public long count() {
        return pathologyRepository.count();
    }

    @Override
    public Page<PathologiesRes> findAll(Pageable pageable) {
        return pathologyRepository.findAll(pageable).map(PathologyMapper::toPathologyRes);
    }

    public List<PathologiesRes> finedByPatientId(Long patientId) {
        return pathologyRepository.findAllPathologiesByPatientId(patientId).stream().map(PathologyMapper::toPathologyRes).toList();
    }

    @Override
    public PathologiesRes findById(Long id) {
        return PathologyMapper.toPathologyRes(pathologyRepository.findById(id).get());
    }

    public Pathology findPathologyById(Long id) {
        return pathologyRepository.findById(id).get();
    }

    @Override
    public boolean existsById(Long id) {
        return pathologyRepository.existsById(id);
    }

    @Override
    public PathologiesRes save(PathologiesReq entity) {
        return PathologyMapper.toPathologyRes(pathologyRepository.save(PathologyMapper.toPathology(entity)));
    }

    public void saveAll(Iterable<Pathology> pathologies) {
        pathologyRepository.saveAll(pathologies);
    }

    @Override
    public PathologiesRes update(PathologiesReq entity) {
        return null;
    }

    @Override
    public void delete(Long id) {
        if (!existsById(id)) {
            throw new EntityNotFoundException("La pathología " + id + " no existe");
        }
        pathologyRepository.deleteById(id);
    }
}
