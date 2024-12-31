import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter, TemplateRef, ContentChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [ReactiveFormsModule, NgIf, NgClass, NgTemplateOutlet]
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Entrer une valeur';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() class: string = '';
  @Input() customErrorText: string = 'Ce champ est requis';
  @Input() control: FormControl = new FormControl('', [Validators.required]);
  @ContentChild(TemplateRef)
  children!: TemplateRef<any> | null;

  @Output() valueChange = new EventEmitter<string>();

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
