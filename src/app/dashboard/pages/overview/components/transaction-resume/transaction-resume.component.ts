import { Component, Input, OnInit } from '@angular/core';
import { TransactionsResumeService } from './transactions-resume.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { NgFor } from '@angular/common';
import { OverviewService } from '../../overview.service';

@Component({
  selector: 'app-transaction-resume',
  standalone: true,
  imports: [NgFor],
  templateUrl: './transaction-resume.component.html',
  styleUrl: './transaction-resume.component.css',
  providers: [TransactionsResumeService],
})
export class TransactionResumeComponent implements OnInit {
  transactions: Transaction[] = [];
  currentAccountNumber: string = '';

  constructor(
    private transactionsResumeService: TransactionsResumeService,
    private overviewService: OverviewService
  ) {}

  ngOnInit(): void {
    this.transactionsResumeService.getTransactionsResume().subscribe({
      next: (transactions) => {
        this.transactions = transactions.map((transaction) => ({
          ...transaction,
          createdAt: new Date(transaction.createdAt).toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }),
        }));
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.overviewService.currentState.subscribe((accountNumber) => {
      this.currentAccountNumber = accountNumber;
      // TODO: actualizar las transacciones de acuerdo al número de cuenta seleccionada
    });
  }
}
