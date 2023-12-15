import { Component, Input } from '@angular/core';
import { SelectComponent } from '../../select/select.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
})
export class FormSelectComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() name: string = '';
  @Input() formSelectId: string = '';
  @Input() label: string = '';
  @Input() selectControl!: FormControl;
  @Input() selectId: string = '';
}
