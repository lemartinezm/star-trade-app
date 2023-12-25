import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './interfaces/account.interface';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './interfaces/transaction.interface';
import { PaginatedResponse } from '../../../shared/interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  private initialState = new BehaviorSubject<string>('');
  currentState = this.initialState.asObservable();
  private initialUserAccounts = new BehaviorSubject<Account[]>([]);
  userAccounts = this.initialUserAccounts.asObservable();
  private initialTransactions = new BehaviorSubject<Transaction[]>([]);
  transactions = this.initialTransactions.asObservable();

  constructor(private http: HttpClient) {}

  updateState(newValue: string) {
    this.initialState.next(newValue);
  }

  updateUserAccounts(newUserAccounts: Account[]) {
    this.initialUserAccounts.next(newUserAccounts);
  }

  updateTransactions(newTransactions: Transaction[]) {
    this.initialTransactions.next(newTransactions);
  }

  getTransactionsResume() {
    return this.http.get<PaginatedResponse<Transaction>>(
      'http://localhost:3000/transactions',
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );
  }
}
