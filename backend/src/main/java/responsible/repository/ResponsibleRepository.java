package responsible.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import responsible.entity.Responsible;

public interface ResponsibleRepository extends JpaRepository<Responsible, Long> { }