package com.wipro.payment_ms.kafka;

import com.wipro.payment_ms.dto.PaymentRequest;
import com.wipro.payment_ms.dto.PaymentResponse;
import com.wipro.payment_ms.entity.Payment;
import com.wipro.payment_ms.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class PaymentListener {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private KafkaTemplate<String, Object> kafkaTemplate;

    private static final String RESPONSE_TOPIC = "payments.response";

    @KafkaListener(topics = "payments.request", groupId = "payment-consumer")
    public void processPayment(PaymentRequest request) {
        if (request == null || request.getBookingId() == null) return;

        // simulate payment processing
        boolean success = new Random().nextDouble() > 0.15; // ~85% success
        String status = success ? "SUCCESSFUL" : "FAILED";
        String txn = "TXN" + System.currentTimeMillis();

        // persist
        Payment p = new Payment();
        p.setBookingId(request.getBookingId());
        p.setAmount(request.getAmount());
        p.setStatus(status);
        p.setTransactionId(txn);
        paymentRepository.save(p);

        // send response
        PaymentResponse resp = new PaymentResponse();
        resp.setBookingId(request.getBookingId());
        resp.setStatus(status);
        resp.setTransactionId(txn);
        kafkaTemplate.send(RESPONSE_TOPIC, resp);
    }
}
