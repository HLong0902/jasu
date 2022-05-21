package jasu_be.repository;

import jasu_be.dto.StudentDTO;
import jasu_be.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
