import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.scss']
})
export class PaymentComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  bookingId = this.route.snapshot.paramMap.get('bookingId') || '';

  pay() {
    // Simulate success — in real app call Payment MS, then route accordingly
    this.router.navigate(['/success', this.bookingId]);
  }

  fail() {
    this.router.navigate(['/failure', this.bookingId]);
  }
}
