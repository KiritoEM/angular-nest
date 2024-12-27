import { Component, Input } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-login',
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() name: string = '';
}
