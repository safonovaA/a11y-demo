import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-native-btn',
  templateUrl: './native-btn.component.html',
  styleUrls: ['./native-btn.component.scss']
})
export class NativeBtnComponent {
  @Input() public withIcon: boolean;
  @Output() public nativeClick = new EventEmitter();

  public onClick() {
    const data = {
      text: this.withIcon ? 'Native with icon button clicked' : 'Native button clicked',
      label: 'Click me!',
      role: 'button',
    };
    this.nativeClick.emit(data);
  }
}
