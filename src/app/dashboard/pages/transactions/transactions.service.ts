import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaginatedResponse } from '../../../shared/interfaces/response.interface';
import { Transaction } from '../overview/interfaces/transaction.interface';
import { Account } from '../overview/interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  baseUrlApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTransactions(
    page = 1,
    epp = 10,
    type = 'all',
    startDate: number | undefined,
    endDate: number | undefined
  ) {
    const params: { [key: string]: any } = { page, epp };

    if (type !== 'all') params['type'] = type;
    if (startDate) params['startDate'] = startDate;
    if (endDate) params['endDate'] = endDate;

    return this.http.get<PaginatedResponse<Transaction>>(
      `${this.baseUrlApi}/transactions`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
        params,
      }
    );
  }

  getUserAccounts() {
    return this.http.get<Account[]>(`${this.baseUrlApi}/accounts`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    });
  }
}
