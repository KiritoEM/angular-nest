import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [ReactiveFormsModule, NgIf, NgClass]
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Entrer une valeur';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() class: string = '';
  @Input() customErrorText: string = 'Ce champ est requis';

  @Output() valueChange = new EventEmitter<string>();

  control: FormControl = new FormControl('', Validators.required);

  getClasses() {
    const baseClass = "base-input";
    const additionalClasses = this.class?.trim() || '';
    return `${baseClass} ${additionalClasses}`;
  }

  get value(): string {
    return this.control.value || '';
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }
}
