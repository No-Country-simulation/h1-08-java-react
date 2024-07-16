package io.hackathon.justina.utils.genInterface;

import java.util.List;

public interface IBaseCRUDServices<T, S> {
    List<T> findAll();

    T findById(Long id);

    boolean existsById(Long id);

    T save(S entity);

    T update(S entity);

    void delete(Long id);
}
