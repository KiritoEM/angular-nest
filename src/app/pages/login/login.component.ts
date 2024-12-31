import { Component, inject, Inject } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from './login.service';
import { LoginUserDto } from './login.dto';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, @Inject(LoginService) private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  getControl(name: string) {
    return this.loginForm.get(name) as FormControl
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submitForm(): void {
    if (this.loginForm?.valid) {
      console.log('Form data:', this.loginForm.value);
      this.loginService.login(this.loginForm.value as LoginUserDto).subscribe({
        next: (data) => {
          console.log("User logged in", data);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
