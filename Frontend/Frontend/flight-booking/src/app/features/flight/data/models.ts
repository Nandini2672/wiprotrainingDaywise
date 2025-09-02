export interface Flight {
  id: string; airline: string; number: string;
  from: string; to: string; depart: string; arrive: string;
  durationMin: number; price: number; nonStop: boolean;
  cabinBaggageKg: number; checkInBaggageKg: number;
  terminalFrom?: string; terminalTo?: string;
}
export interface SearchQuery { from: string; to: string; date: string; }
export interface Booking { bookingId: string; flightId: string; name: string; email: string; amount: number; }
export type PaymentMethod = 'CARD' | 'UPI' | 'NETBANKING' | 'QR' | 'PAYLATER';
export interface CardPayload { cardNumber: string; nameOnCard: string; expiry: string; cvv: string; }
