import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiBaseUrl;

  get<T>(url: string, params?: Record<string, any>) {
    let httpParams = new HttpParams();
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v !== undefined && v !== null && v !== '') httpParams = httpParams.set(k, String(v));
      }
    }
    return this.http.get<T>(`${this.base}${url}`, { params: httpParams });
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(`${this.base}${url}`, body);
  }
}
