import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuickActionsService {
  constructor(private http: HttpClient) {}

  sendMoney(sourceAccount: string, destinationAccount: string, amount: number) {
    return this.http.post<{
      sourceAccountNumber: string;
      destinationAccountNumber: string;
      amount: number;
      description: string | null;
      status: string;
    }>(
      'http://localhost:3000/transactions',
      {
        sourceAccountNumber: sourceAccount,
        destinationAccountNumber: destinationAccount,
        amount: Number(amount),
      },
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );
  }
}
