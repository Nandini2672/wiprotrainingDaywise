import { Injectable } from '@angular/core';
import { CardPayload, PaymentMethod } from '../models';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  pay(bookingId: string, amount: number, method: PaymentMethod, card?: CardPayload)
    : Promise<{ status: 'SUCCESS'|'FAILED' }> {
    if (method === 'CARD' && (!card || card.cardNumber.replace(/\s/g,'').length !== 16)) {
      return Promise.resolve({ status: 'FAILED' });
    }
    const success = Math.random() > 0.2;
    return new Promise(resolve => setTimeout(() =>
      resolve({ status: success ? 'SUCCESS' : 'FAILED' }), 900));
  }
}
