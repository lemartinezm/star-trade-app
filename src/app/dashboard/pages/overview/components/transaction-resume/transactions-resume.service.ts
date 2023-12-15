import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsResumeService {
  constructor(private http: HttpClient) {}

  getTransactionsResume() {
    return this.http.get<Transaction[]>('http://localhost:3000/transactions', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }
}
