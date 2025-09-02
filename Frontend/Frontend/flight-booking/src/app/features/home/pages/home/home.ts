import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    source: ['', [Validators.required, Validators.minLength(2)]],
    destination: ['', [Validators.required, Validators.minLength(2)]],
    travelDate: ['', Validators.required]
  });

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { source, destination, travelDate } = this.form.value;
    this.router.navigate(['/search-results'], { queryParams: { source, destination, travelDate } });
  }
}
