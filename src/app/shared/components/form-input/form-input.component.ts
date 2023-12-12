import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
})
export class FormInputComponent implements OnInit {
  @Input() label: string = 'Label';
  @Input() inputId: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() parentFormGroup!: FormGroup;
  inputControl = new FormControl('');

  ngOnInit() {
    this.parentFormGroup.addControl(this.name, this.inputControl);
  }
}
