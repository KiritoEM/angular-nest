import { Component, inject, Inject } from '@angular/core';
import { InputComponent } from '../../components/shared/input/input.component';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { SignupDTO } from './signup.dto';
import { TokenService } from '../../core/services/token.service';
import { Router, RouterLink } from '@angular/router';
import { Fields, FormType } from './types';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<FormType>;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private signupService: SignupService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      [Fields.Email]: ['', Validators.required],
      [Fields.Password]: ['', [Validators.required, Validators.minLength(8)]],
      [Fields.Username]: ['', Validators.required],
    })
  }

  getControl(name: string) {
    return this.signupForm?.get(name) as FormControl
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  submitForm(): void {
    console.log(this.signupForm.value)
    if (this.signupForm?.valid) {
      this.signupService.signup(this.signupForm.value as SignupDTO).subscribe({
        next: (data) => {
          console.log("Account created successfull !!!", data);
          this.tokenService.setToken(data.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert("L'utilisateur avec cet email existe déja !!!");
          console.error(err);
        }
      });
    }
  }
}
