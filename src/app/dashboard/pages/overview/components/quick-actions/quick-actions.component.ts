import { Component, OnInit } from '@angular/core';
import { FormSelectComponent } from '../../../../../shared/components/form/form-select/form-select.component';
import { FormInputComponent } from '../../../../../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { OverviewService } from '../../overview.service';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [FormSelectComponent, FormInputComponent, ButtonComponent],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent implements OnInit {
  sourceAccountOptions: { label: string; value: string }[] = [];

  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.overviewService.userAccounts.subscribe((accounts) => {
      this.sourceAccountOptions = accounts.map((account) => ({
        label: account.accountNumber,
        value: account.accountNumber,
      }));
    });
  }
}
