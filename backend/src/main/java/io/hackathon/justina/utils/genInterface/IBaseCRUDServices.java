package io.hackathon.justina.utils.genInterface;

import io.hackathon.justina.patient.model.dto.PatientDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IBaseCRUDServices<T, S> {
    Page<T> findAll(Pageable pageable);

    T findById(Long id);

    boolean existsById(Long id);

    T save(S entity);

    T update(S entity);

    void delete(Long id);


}
