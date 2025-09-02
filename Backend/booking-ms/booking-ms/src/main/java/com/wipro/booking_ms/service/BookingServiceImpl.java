package com.wipro.booking_ms.service;

import com.wipro.booking_ms.entity.Booking;
import com.wipro.booking_ms.repository.BookingRepository;
import com.wipro.booking_ms.dto.PaymentRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    private static final String PAY_REQ_TOPIC = "payments.request";

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Booking createBooking(Booking booking) {
        booking.setStatus("INITIATED");
        Booking saved = bookingRepository.save(booking);

        // send payment request asynchronously to Kafka
        PaymentRequest req = new PaymentRequest(saved.getId(), saved.getAmount(), saved.getPaymentMode());
        kafkaTemplate.send(PAY_REQ_TOPIC, req);

        return saved;
    }

    @Override
    public Optional<Booking> findById(Long id) {
        return bookingRepository.findById(id);
    }

    @Override
    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }
}
