package jasu_be.repository;

import jasu_be.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RateRepository extends JpaRepository<Rate, Integer> {
    List<Rate> findByIdEvualated(Integer id);
}
