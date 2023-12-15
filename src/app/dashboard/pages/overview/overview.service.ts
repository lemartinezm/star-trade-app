import { Injectable } from '@angular/core';
import { Account } from './interfaces/account.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  private initialState = new BehaviorSubject<string>('');
  currentState = this.initialState.asObservable();

  updateState(newValue: string) {
    this.initialState.next(newValue);
  }
}
