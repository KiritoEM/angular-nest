import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  imports: [NgClass, ReactiveFormsModule, NgIf],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Entrer une valeur';
  @Input() name: string = '';
  @Input() class: string = '';
  @Input() customErrorText: string = 'Ce champ est requis';
  @Input() control: FormControl = new FormControl('', [Validators.required]);

  @Output() valueChange = new EventEmitter<string>();

  getClasses() {
    const baseClass = "base-textarea";
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
