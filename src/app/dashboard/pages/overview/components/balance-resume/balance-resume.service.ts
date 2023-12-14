import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class BalanceResumeService {
  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<Account[]>('http://localhost:3000/accounts', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }
}
