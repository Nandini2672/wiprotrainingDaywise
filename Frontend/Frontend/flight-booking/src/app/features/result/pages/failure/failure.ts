import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-failure',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container py-4"><h2>❌ Payment Failed</h2><p>Booking ID: {{ id }}</p></div>`
})
export class FailureComponent {
  id = inject(ActivatedRoute).snapshot.paramMap.get('bookingId') || '';
}

