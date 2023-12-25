import { Component, OnInit } from '@angular/core';
import { TransactionResumeComponent } from './components/transaction-resume/transaction-resume.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { BalanceResumeComponent } from './components/balance-resume/balance-resume.component';
import { OverviewService } from './overview.service';
import { StatisticsComponent } from './components/statistics/statistics.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    TransactionResumeComponent,
    QuickActionsComponent,
    BalanceResumeComponent,
    StatisticsComponent,
  ],
  providers: [OverviewService],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.overviewService.getTransactionsResume().subscribe((response) => {
      const transactions = response.items;
      this.overviewService.updateTransactions(transactions);
    });
  }
}
