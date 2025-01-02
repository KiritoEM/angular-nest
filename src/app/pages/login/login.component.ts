import { Component, inject, Inject } from '@angular/core';
import { InputComponent } from '../../components/shared/input/input.component';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from './login.service';
import { LoginUserDto } from './login.dto';
import { TokenService } from '../../core/services/token.service';
import { Router, RouterLink } from '@angular/router';
import { Fields, FormType } from './types';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<FormType>;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      [Fields.Email]: ['', Validators.required],
      [Fields.Password]: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  getControl(name: string) {
    return this.loginForm?.get(name) as FormControl
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submitForm(): void {
    if (this.loginForm?.valid) {
      this.loginService.login(this.loginForm.value as LoginUserDto).subscribe({
        next: (data) => {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert("Un erreur s'est produit !!!");
          console.error(err);
        }
      });
    }
  }
}
