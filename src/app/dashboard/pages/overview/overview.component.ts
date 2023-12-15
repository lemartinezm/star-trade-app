import { Component } from '@angular/core';
import { TransactionResumeComponent } from './components/transaction-resume/transaction-resume.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { BalanceResumeComponent } from './components/balance-resume/balance-resume.component';
import { OverviewService } from './overview.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    TransactionResumeComponent,
    QuickActionsComponent,
    BalanceResumeComponent,
  ],
  providers: [OverviewService],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {}
