import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-resume',
  standalone: true,
  imports: [],
  templateUrl: './transaction-resume.component.html',
  styleUrl: './transaction-resume.component.css',
})
export class TransactionResumeComponent {
  @Input() type: 'income' | 'expense' = 'income';
}
