import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() name: string = '';
  @Input() id: string = '';
}
