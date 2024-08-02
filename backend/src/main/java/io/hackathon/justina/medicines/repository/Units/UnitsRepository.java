package io.hackathon.justina.medicines.repository.Units;

import io.hackathon.justina.medicines.model.Units.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitsRepository extends JpaRepository<Unit, Long> {

}
