package com.wipro.booking_ms.dto;

public class PaymentRequest {
    private Long bookingId;
    private Double amount;
    private String mode;

    public PaymentRequest() {}

    public PaymentRequest(Long bookingId, Double amount, String mode) {
        this.bookingId = bookingId;
        this.amount = amount;
        this.mode = mode;
    }

    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public Double getAmount() { return amount; }
    public void setAmount(Double amount) { this.amount = amount; }

    public String getMode() { return mode; }
    public void setMode(String mode) { this.mode = mode; }
}
