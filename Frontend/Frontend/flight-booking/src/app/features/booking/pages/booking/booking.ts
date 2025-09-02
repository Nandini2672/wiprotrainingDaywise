import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../../flight/data/flight.service';
import { Flight } from '../../../flight/data/models';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.scss']
})
export class BookingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private svc = inject(FlightService);

  flight = signal<Flight | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]]
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.loading.set(true);
    this.svc.getFlight(id).subscribe({
      next: f => { this.flight.set(f); this.loading.set(false); },
      error: () => { this.error.set('Failed to load flight'); this.loading.set(false); }
    });
  }

  proceed() {
    if (this.form.invalid || !this.flight()) { this.form.markAllAsTouched(); return; }
    const { name, email } = this.form.value;
    this.loading.set(true);
    this.svc.createBooking(this.flight()!.id, { name: String(name), email: String(email) }).subscribe({
      next: res => { this.loading.set(false); this.router.navigate(['/payment', res.bookingId]); },
      error: () => { this.loading.set(false); this.error.set('Failed to create booking'); }
    });
  }
}

