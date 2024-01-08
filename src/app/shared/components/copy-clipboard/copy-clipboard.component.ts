import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-clipboard',
  standalone: true,
  imports: [],
  templateUrl: './copy-clipboard.component.html',
  styleUrl: './copy-clipboard.component.css',
})
export class CopyClipboardComponent {
  @Input() valueToCopy: string = '';

  handleCopy() {
    navigator.clipboard.writeText(this.valueToCopy);
    alert('Copied to clipboard');
  }
}
