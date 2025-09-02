package com.wipro.flight_data_ms.repository;

import com.wipro.flight_data_ms.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Long> {
    List<Flight> findBySourceIgnoreCaseAndDestinationIgnoreCaseAndAvailableFromLessThanEqualAndAvailableToGreaterThanEqual(
            String source, String destination, LocalDate d1, LocalDate d2);
}
