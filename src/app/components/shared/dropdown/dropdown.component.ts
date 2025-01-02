import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  isDropdownVisible: boolean = false;

  @ContentChild(TemplateRef) trigger!: TemplateRef<any>;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
