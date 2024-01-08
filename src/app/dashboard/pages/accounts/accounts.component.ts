import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../../shared/services/accounts/accounts.service';
import { Account } from '../../../shared/interfaces/account.interface';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormSelectComponent } from '../../../shared/components/form/form-select/form-select.component';
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TransactionsService } from '../../../shared/services/transactions/transactions.service';
import { CopyClipboardComponent } from '../../../shared/components/copy-clipboard/copy-clipboard.component';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
    NgClass,
    ReactiveFormsModule,
    FormSelectComponent,
    FormInputComponent,
    ButtonComponent,
    CopyClipboardComponent,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit {
  userAccounts: Account[] = [];
  accountSelected: Account | null = null;
  accountOptions: { label: string; value: string }[] = [];
  tabSelected: string = 'send';
  formGroup = new FormGroup({
    sourceAccount: new FormControl<string>(''),
    destinationAccount: new FormControl<string>(''),
    amount: new FormControl<number>(0),
  });

  constructor(
    private accountsService: AccountsService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountsService.getAccounts().subscribe((accounts) => {
      this.userAccounts = accounts;

      if (!this.accountSelected) {
        this.accountSelected = this.userAccounts[0];
      } else {
        this.accountSelected =
          this.userAccounts.find(
            (account) =>
              account.accountNumber === this.accountSelected?.accountNumber
          ) || null;
      }

      if (this.userAccounts.length === 0)
        this.accountOptions = this.userAccounts.map((account) => ({
          label: account.accountLabel || account.accountNumber,
          value: account.accountNumber,
        }));
    });
  }

  handleChangeAccount(accountSelected: Account) {
    this.accountSelected = accountSelected;
  }

  handleNewAccount() {
    this.accountsService.createAccount().subscribe({
      next: (account) => {
        alert('Account created');
      },
      error: (error) => {
        alert('Error creating account');
        console.error(error);
      },
    });
  }

  handleSelectTab(tab: string) {
    this.tabSelected = tab;
  }

  handleSend() {
    const { amount, destinationAccount } = this.formGroup.value;

    if (amount && destinationAccount && this.accountSelected)
      this.transactionsService
        .sendMoney(
          this.accountSelected?.accountNumber,
          destinationAccount,
          amount
        )
        .subscribe({
          next: () => alert('Money sent'),
          error: () => alert('Error sending money'),
          complete: () => {
            this.formGroup.reset();
            this.getAccounts();
          },
        });
  }

  handleReceive() {}
}
