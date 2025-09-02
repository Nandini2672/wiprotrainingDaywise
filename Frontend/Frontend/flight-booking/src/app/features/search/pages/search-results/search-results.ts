import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  // 🔥 inline template so we don't depend on a separate HTML file
  template: `
    <div class="container py-4">
      <h2 class="mb-3">Search Results</h2>

      <p class="text-muted">
        {{ source }} → {{ destination }} on {{ travelDate }}
      </p>

      <div class="list-group">
        <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                (click)="book('f1')">
          <div>
            <div class="fw-bold">IndiGo • 6E-123</div>
            <div class="small text-muted">{{ source }} → {{ destination }} | 10:00 – 12:00 • Stops: 0</div>
          </div>
          <div class="fs-5">₹3,499</div>
        </button>

        <button class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                (click)="book('f2')">
          <div>
            <div class="fw-bold">Air India • AI-456</div>
            <div class="small text-muted">{{ source }} → {{ destination }} | 13:00 – 15:00 • Stops: 1</div>
          </div>
          <div class="fs-5">₹4,199</div>
        </button>
      </div>

      <div class="mt-3">
        <!-- hard test link, in case clicks are blocked -->
        <a class="btn btn-link" [routerLink]="['/booking','f1']">Go to booking (test)</a>
      </div>
    </div>
  `
})
export class SearchResultsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  source = '';
  destination = '';
  travelDate = '';

  ngOnInit() {
    const qp = this.route.snapshot.queryParamMap;
    this.source = qp.get('source') ?? '';
    this.destination = qp.get('destination') ?? '';
    this.travelDate = qp.get('travelDate') ?? '';
    console.log('SearchResults loaded with', { source: this.source, destination: this.destination, travelDate: this.travelDate });
  }

  book(id: string) {
    console.log('book()', id);
    this.router.navigate(['/booking', id]);
  }
}
