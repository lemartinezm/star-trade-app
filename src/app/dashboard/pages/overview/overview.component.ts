import { Component } from '@angular/core';
import { TransactionResumeComponent } from './components/transaction-resume/transaction-resume.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [TransactionResumeComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {}
