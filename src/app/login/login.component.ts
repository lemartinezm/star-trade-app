import { Component } from '@angular/core';
import { FormInputComponent } from '../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
