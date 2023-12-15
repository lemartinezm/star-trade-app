import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from './interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  private initialState = new BehaviorSubject<string>('');
  currentState = this.initialState.asObservable();
  private initialUserAccounts = new BehaviorSubject<Account[]>([]);
  userAccounts = this.initialUserAccounts.asObservable();

  updateState(newValue: string) {
    this.initialState.next(newValue);
  }

  updateUserAccounts(newUserAccounts: Account[]) {
    this.initialUserAccounts.next(newUserAccounts);
  }
}
