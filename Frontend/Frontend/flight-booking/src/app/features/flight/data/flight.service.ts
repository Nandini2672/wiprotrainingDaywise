import { Injectable } from '@angular/core';
import { Flight, SearchQuery } from '../models';

@Injectable({ providedIn: 'root' })
export class FlightService {
  private flights: Flight[] = [
    { id:'F001', airline:'IndiGo', number:'6E 123', from:'Kolkata (CCU)', to:'Chennai (MAA)',
      depart:'18:00', arrive:'20:15', durationMin:135, price:5450, nonStop:true, cabinBaggageKg:7, checkInBaggageKg:15 },
    { id:'F002', airline:'Air India', number:'AI 785', from:'Kolkata (CCU)', to:'Chennai (MAA)',
      depart:'17:00', arrive:'19:30', durationMin:150, price:5651, nonStop:true, cabinBaggageKg:7, checkInBaggageKg:15, terminalTo:'T4' },
    { id:'F003', airline:'IndiGo', number:'6E 567', from:'Kolkata (CCU)', to:'Chennai (MAA)',
      depart:'15:00', arrive:'17:20', durationMin:140, price:6285, nonStop:false, cabinBaggageKg:7, checkInBaggageKg:15 }
  ];
  search(q: SearchQuery): Flight[] {
    return this.flights.filter(f => f.from.includes(q.from) && f.to.includes(q.to))
                       .sort((a,b) => a.price - b.price);
  }
  getById(id: string) { return this.flights.find(f => f.id === id)!; }
}

