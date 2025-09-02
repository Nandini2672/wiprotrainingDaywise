package com.wipro.payment_ms.controller;

import com.wipro.payment_ms.entity.Payment;
import com.wipro.payment_ms.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository repository;

    @GetMapping("/all")
    public List<Payment> all() {
        return repository.findAll();
    }
}
