import { Component, OnInit } from '@angular/core';
import { FormSelectComponent } from '../../../../../shared/components/form/form-select/form-select.component';
import { FormInputComponent } from '../../../../../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { OverviewService } from '../../overview.service';
import { NgClass } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuickActionsService } from './quick-actions.service';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [
    FormSelectComponent,
    FormInputComponent,
    ButtonComponent,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css',
})
export class QuickActionsComponent implements OnInit {
  accountOptions: { label: string; value: string }[] = [];
  activeButton: string = 'send';
  formGroup = new FormGroup({
    type: new FormControl('send'),
    sourceAccount: new FormControl('', [Validators.required]),
    destinationAccount: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
  });

  constructor(
    private overviewService: OverviewService,
    private quickActionsService: QuickActionsService
  ) {}

  ngOnInit(): void {
    this.overviewService.userAccounts.subscribe((accounts) => {
      this.accountOptions = accounts.map((account) => ({
        label: account.accountNumber,
        value: account.accountNumber,
      }));
    });
  }

  handleChangeActionType(e: Event) {
    const target = e.target as HTMLButtonElement;
    this.activeButton = target.value;
  }

  handleSubmit() {
    const { amount, destinationAccount, sourceAccount, type } =
      this.formGroup.value;
    if (type === 'send' && sourceAccount && destinationAccount && amount) {
      this.quickActionsService
        .sendMoney(sourceAccount, destinationAccount, amount)
        .subscribe({
          next: (data) => {
            alert('Transaction created successfully');
          },
          error: (err) => {
            alert('Error creating transaction');
            console.log(err);
          },
        });
    }
  }
}
