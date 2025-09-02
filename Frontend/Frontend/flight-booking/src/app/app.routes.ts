import { Routes } from '@angular/router';
import { SearchPageComponent } from './features/search/search-page.component';
import { ResultsPageComponent } from './features/results/results-page.component';
import { BookingPageComponent } from './features/booking/booking-page.component';
import { PaymentPageComponent } from './features/payment/payment-page.component';
import { SuccessPageComponent } from './features/status/success-page.component';
import { FailurePageComponent } from './features/status/failure-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'results', component: ResultsPageComponent },
  { path: 'booking/:id', component: BookingPageComponent },
  { path: 'payment/:bookingId', component: PaymentPageComponent },
  { path: 'success/:bookingId', component: SuccessPageComponent },
  { path: 'failure/:bookingId', component: FailurePageComponent },
  { path: '**', redirectTo: 'search' }
];



