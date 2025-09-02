package com.wipro.flight_data_ms.controller;

import com.wipro.flight_data_ms.entity.Flight;
import com.wipro.flight_data_ms.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/flights")
public class FlightController {

    @Autowired
    private FlightService service;

    @GetMapping("/all")
    public List<Flight> all() {
        return service.findAll();
    }

    @PostMapping
    public Flight create(@RequestBody Flight flight) {
        return service.save(flight);
    }

    @GetMapping("/search")
    public List<Flight> search(@RequestParam String source,
                               @RequestParam String destination,
                               @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) String date) {
        LocalDate d = LocalDate.parse(date);
        return service.search(source, destination, d);
    }

    @GetMapping("/{id}")
    public Flight getById(@PathVariable Long id) {
        Optional<Flight> maybe = service.findById(id);
        return maybe.orElse(null);
    }
}
