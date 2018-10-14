import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss']
})
export class CustomBtnComponent {
  @Output() public goodClick = new EventEmitter();

  public onClick() {
    const data = {
      text: 'Good button clicked:)',
      label: 'Click me!',
      role: 'button',
    };
    this.goodClick.emit(data);
  }

}
