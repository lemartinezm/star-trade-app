import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../interfaces/account.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  baseUrlApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<Account[]>(`${this.baseUrlApi}/accounts`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }

  createAccount(accountLabel?: string) {
    const body: { [key: string]: string } = {};
    if (accountLabel) body['label'] = accountLabel;

    return this.http.post<Account>(`${this.baseUrlApi}/accounts`, body, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }
}
