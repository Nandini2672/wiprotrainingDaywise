package com.wipro.booking_ms.service;

import com.wipro.booking_ms.entity.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    Booking createBooking(Booking booking);
    Optional<Booking> findById(Long id);
    List<Booking> findAll();
}
