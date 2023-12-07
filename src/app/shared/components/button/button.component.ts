import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  class: string = 'btn';
  @Input() text = '';
  @Input() variant: 'fill' | 'outline' = 'fill';
  @Input() color: 'primary' | 'secondary' = 'primary';

  ngOnInit() {
    if (this.variant) this.class += ` btn-${this.variant}`;
    if (this.color) this.class += ` btn-${this.color}`;
  }
}
