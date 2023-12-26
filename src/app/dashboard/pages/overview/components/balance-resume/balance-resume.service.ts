import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BalanceResumeService {
  baseUrlApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<Account[]>(`${this.baseUrlApi}/accounts`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }
}
