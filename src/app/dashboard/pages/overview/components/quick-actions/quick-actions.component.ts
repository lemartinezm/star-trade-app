import { Component } from '@angular/core';
import { FormSelectComponent } from '../../../../../shared/components/form/form-select/form-select.component';
import { FormInputComponent } from '../../../../../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [FormSelectComponent, FormInputComponent, ButtonComponent],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent {
  sourceAccountOptions: { label: string; value: string }[] = [
    { label: 'Account 1', value: 'account1' },
    { label: 'Account 2', value: 'account2' },
    { label: 'Account 3', value: 'account3' },
  ];
}
