package com.wipro.flight_data_ms.service;

import com.wipro.flight_data_ms.entity.Flight;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface FlightService {
    Flight save(Flight flight);
    Optional<Flight> findById(Long id);
    List<Flight> search(String source, String destination, LocalDate date);
    List<Flight> findAll();
}
