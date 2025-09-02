package com.wipro.booking_ms.dto;

public class PaymentResponse {
    private Long bookingId;
    private String status;
    private String transactionId;

    public PaymentResponse() {}

    public PaymentResponse(Long bookingId, String status, String transactionId) {
        this.bookingId = bookingId;
        this.status = status;
        this.transactionId = transactionId;
    }

    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getTransactionId() { return transactionId; }
    public void setTransactionId(String transactionId) { this.transactionId = transactionId; }
}
