package com.wipro.flight_data_ms.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "flight")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String airline;
    private String flightNumber;
    private String source;
    private String destination;
    private Double price;
    private LocalDate availableFrom;
    private LocalDate availableTo;
    private Integer seats;

    public Flight() {}

    // getters & setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getAirline() { return airline; }
    public void setAirline(String airline) { this.airline = airline; }

    public String getFlightNumber() { return flightNumber; }
    public void setFlightNumber(String flightNumber) { this.flightNumber = flightNumber; }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public LocalDate getAvailableFrom() { return availableFrom; }
    public void setAvailableFrom(LocalDate availableFrom) { this.availableFrom = availableFrom; }

    public LocalDate getAvailableTo() { return availableTo; }
    public void setAvailableTo(LocalDate availableTo) { this.availableTo = availableTo; }

    public Integer getSeats() { return seats; }
    public void setSeats(Integer seats) { this.seats = seats; }
}
