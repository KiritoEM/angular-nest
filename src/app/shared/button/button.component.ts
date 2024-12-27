import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[my-button],a[my-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  @HostBinding("class.secondary")
  isSecondary = false

  @Input()
  @HostBinding('class.btn-outline')
  isOutline = false;

  @Input()
  @HostBinding('class.btn-destructive')
  isDesctructive = false;
}
