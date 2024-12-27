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
  @Input() placeholder: string = 'Entre une valeur';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() class: string = '';

  @Output() valueChange = new EventEmitter<string>();

  control: FormControl = new FormControl('', Validators.required);

  getClasses() {
    const baseClasses = "flex mt-2 h-[45px] items-center rounded-lg bg-input/65 bg-transparent pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2";
    const additionalClasses = this.class?.trim() || '';
    return `${baseClasses} ${additionalClasses}`;
  }

  get value(): string {
    return this.control.value || '';
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }
}
