import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../../../../../shared/components/select/select.component';
import { BalanceResumeService } from './balance-resume.service';
import { Account } from '../../interfaces/account.interface';
import { OverviewService } from '../../overview.service';

@Component({
  selector: 'app-balance-resume',
  standalone: true,
  imports: [SelectComponent],
  providers: [BalanceResumeService],
  templateUrl: './balance-resume.component.html',
  styleUrl: './balance-resume.component.css',
})
export class BalanceResumeComponent implements OnInit {
  accounts: Account[] = [];
  accountSelected: Account = {
    id: 0,
    accountNumber: '00000000000000000000000',
    balance: '0.00',
    createdAt: '',
  };
  options: { value: string; label: string }[] = [];

  constructor(
    private balanceResumeService: BalanceResumeService,
    private overviewService: OverviewService
  ) {}

  ngOnInit() {
    this.overviewService.userAccounts.subscribe({
      next: (accounts) => {
        this.accounts = [...accounts];
        this.accountSelected = accounts[0];
        this.options = accounts.map((account) => ({
          label: account.accountNumber,
          value: account.accountNumber,
        }));
        this.overviewService.updateState(accounts[0].accountNumber);
      },
    });

    this.balanceResumeService.getAccounts().subscribe({
      next: (accounts) => {
        this.overviewService.updateUserAccounts(accounts);
      },
      error: (err) => console.error(err),
    });
  }

  handleChangeAccount(accountNumber: string) {
    const newAccountSelected = this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
    if (newAccountSelected) {
      this.accountSelected = newAccountSelected;
      this.overviewService.updateState(newAccountSelected.accountNumber);
    }
  }
}
