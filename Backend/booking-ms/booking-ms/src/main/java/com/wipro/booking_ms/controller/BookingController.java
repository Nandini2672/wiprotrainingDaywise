package com.wipro.booking_ms.controller;

import com.wipro.booking_ms.entity.Booking;
import com.wipro.booking_ms.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping("/create")
    public Booking create(@RequestBody Booking booking) {
        return service.createBooking(booking);
    }

    @GetMapping("/{id}")
    public Booking get(@PathVariable Long id) {
        Optional<Booking> maybe = service.findById(id);
        return maybe.orElse(null);
    }

    @GetMapping("/all")
    public List<Booking> all() {
        return service.findAll();
    }
}
