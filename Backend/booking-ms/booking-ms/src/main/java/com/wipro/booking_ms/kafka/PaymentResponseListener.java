package com.wipro.booking_ms.kafka;

import com.wipro.booking_ms.dto.PaymentResponse;
import com.wipro.booking_ms.entity.Booking;
import com.wipro.booking_ms.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class PaymentResponseListener {

    @Autowired
    private BookingRepository bookingRepository;

    @KafkaListener(topics = "payments.response", groupId = "booking-consumer", containerFactory = "kafkaListenerContainerFactory")
    public void listen(PaymentResponse response) {
        if (response == null || response.getBookingId() == null) return;
        Long bookingId = response.getBookingId();
        bookingRepository.findById(bookingId).ifPresent(b -> {
            b.setStatus(response.getStatus());
            b.setTransactionId(response.getTransactionId());
            bookingRepository.save(b);
        });
    }
}
