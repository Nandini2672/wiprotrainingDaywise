import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booking } from '../models';
import { FlightService } from './flight.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _booking$ = new BehaviorSubject<Booking | null>(null);
  booking$ = this._booking$.asObservable();

  constructor(private flights: FlightService) {}

  createBooking(flightId: string, name: string, email: string): Booking {
    const amount = this.flights.getById(flightId).price;
    const booking: Booking = {
      bookingId: 'B' + Math.floor(100000 + Math.random()*900000),
      flightId, name, email, amount
    };
    this._booking$.next(booking);
    return booking;
  }
  get current() { return this._booking$.value; }
}
