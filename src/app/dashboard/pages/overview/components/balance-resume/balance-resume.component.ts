import { Component } from '@angular/core';
import { SelectComponent } from '../../../../../shared/components/select/select.component';

@Component({
  selector: 'app-balance-resume',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './balance-resume.component.html',
  styleUrl: './balance-resume.component.css',
})
export class BalanceResumeComponent {
  options: { value: string; label: string }[] = [
    { label: 'Account 1', value: 'Account 1' },
    { label: 'Account 2', value: 'Account 2' },
  ];
}
