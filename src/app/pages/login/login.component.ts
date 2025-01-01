import { Component, inject, Inject } from '@angular/core';
import { InputComponent } from '../../components/shared/input/input.component';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from './login.service';
import { LoginUserDto } from './login.dto';
import { TokenService } from '../../core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, @Inject(LoginService) private loginService: LoginService, @Inject(TokenService) private tokenService: TokenService, @Inject(Router) private router: Router) { }

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
          this.tokenService.setToken(data.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}
