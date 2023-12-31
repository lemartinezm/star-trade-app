import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction.interface';
import { NgFor } from '@angular/common';
import { OverviewService } from '../../overview.service';

@Component({
  selector: 'app-transaction-resume',
  standalone: true,
  imports: [NgFor],
  templateUrl: './transaction-resume.component.html',
  styleUrl: './transaction-resume.component.css',
})
export class TransactionResumeComponent implements OnInit {
  transactions: Transaction[] = [];
  currentAccountNumber: string = '';

  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.overviewService.transactions.subscribe({
      next: (transactions) => {
        this.transactions = transactions
          .map((transaction) => ({
            ...transaction,
            createdAt: new Date(transaction.createdAt).toLocaleString('en-US', {
              day: 'numeric',
              month: 'short',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            }),
          }))
          .slice(0, 3);
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
