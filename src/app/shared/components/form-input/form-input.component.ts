import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent {
  @Input() label: string = 'Label';
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
