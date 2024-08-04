package io.hackathon.justina.laboratory.repository;

import io.hackathon.justina.laboratory.model.Laboratory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LaboratoryRepository extends JpaRepository<Laboratory, Long> {

}
