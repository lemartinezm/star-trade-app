import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() selectId: string = '';
  @Output() valueChange = new EventEmitter<string>();

  handleSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.valueChange.emit(target.value);
  }
}
