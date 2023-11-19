package question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> { }