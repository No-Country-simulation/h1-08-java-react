package io.hackathon.justina.clinicHistory.repository;

import io.hackathon.justina.clinicHistory.model.ClinicHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicHistoryRepository extends JpaRepository<ClinicHistory, Long> {

    Page<ClinicHistory> findByPatientId(Long id, Pageable pageable);
}
