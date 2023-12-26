import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  verifyToken(token: string) {
    return this.http.get<{ message: string }>(`${this.baseUrl}/auth/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
