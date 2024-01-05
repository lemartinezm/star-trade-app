import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  baseUrlApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMoney(sourceAccount: string, destinationAccount: string, amount: number) {
    return this.http.post<{
      sourceAccountNumber: string;
      destinationAccountNumber: string;
      amount: number;
      description: string | null;
      status: string;
    }>(
      `${this.baseUrlApi}/transactions`,
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
