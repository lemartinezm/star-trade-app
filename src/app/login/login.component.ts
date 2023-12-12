import { Component } from '@angular/core';
import { FormInputComponent } from '../shared/components/form-input/form-input.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { LoginService } from './login.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormInputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService],
})
export class LoginComponent {
  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService) {}

  handleSubmit() {
    const { email, password } = this.loginFormGroup.value;
    if (email && password) {
      this.loginService.login(email, password);
    }
  }
}
