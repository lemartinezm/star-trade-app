import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient, private router: Router) {}

  verifyToken(token: string) {
    return this.http.get<{ message: string }>(
      'http://localhost:3000/auth/token',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
