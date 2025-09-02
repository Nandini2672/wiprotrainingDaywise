package com.wipro.booking_ms.repository;

import com.wipro.booking_ms.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
