package com.wipro.flight_data_ms.service;

import com.wipro.flight_data_ms.entity.Flight;
import com.wipro.flight_data_ms.repository.FlightRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository repository;

    @Override
    public Flight save(Flight flight) {
        return repository.save(flight);
    }

    @Override
    public Optional<Flight> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Flight> search(String source, String destination, LocalDate date) {
        return repository.findBySourceIgnoreCaseAndDestinationIgnoreCaseAndAvailableFromLessThanEqualAndAvailableToGreaterThanEqual(
                source, destination, date, date
        );
    }

    @Override
    public List<Flight> findAll() {
        return repository.findAll();
    }
}
