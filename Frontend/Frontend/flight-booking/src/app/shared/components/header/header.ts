import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
  <nav class="navbar navbar-light bg-white border-bottom sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Flight Booker</a>
    </div>
  </nav>`
})
export class HeaderComponent {}

