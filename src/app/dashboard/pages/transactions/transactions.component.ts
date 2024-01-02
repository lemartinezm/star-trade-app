import { Component, OnInit } from '@angular/core';
import { Transaction } from '../overview/interfaces/transaction.interface';
import { TransactionsService } from './transactions.service';
import { NgClass, NgFor } from '@angular/common';
import { Account } from '../overview/interfaces/account.interface';
import { MetaData } from '../../../shared/interfaces/response.interface';
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormSelectComponent } from '../../../shared/components/form/form-select/form-select.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    FormInputComponent,
    FormSelectComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
  providers: [TransactionsService],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  accounts: Account[] = [];
  accountNumbers: string[] = [];
  meta: MetaData = {
    currentPage: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    totalItems: 0,
    totalPages: 0,
    itemsPerPage: 8,
    nextPage: 1,
    previousPage: 1,
  };

  filtersForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    transactionsType: new FormControl('all'),
  });

  transactionsTypeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Expenses', value: 'expenses' },
    { label: 'Incomes', value: 'incomes' },
  ];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getUserAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      this.accountNumbers = accounts.map((account) => account.accountNumber);
    });

    this.updateTransactions(this.meta.currentPage);
  }

  updateTransactions(page: number) {
    this.transactionsService
      .getTransactions(
        page,
        this.meta.itemsPerPage,
        'all',
        undefined,
        undefined
      )
      .subscribe((response) => {
        this.meta = response.meta;

        this.transactions = response.items.map((transaction) => ({
          ...transaction,
          createdAt: new Date(transaction.createdAt).toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
          amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(transaction.amount)),
        }));
      });
  }
}
