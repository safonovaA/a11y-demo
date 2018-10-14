import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-btn-non',
  templateUrl: './custom-btn-non.component.html',
  styleUrls: ['./custom-btn-non.component.scss']
})
export class CustomBtnNonComponent {
  @Output() public badClick = new EventEmitter();

  public onClick() {
    const data = {
      text: 'Custom VERY BAD button clicked',
      label: 'Click me!',
      role: '',
    };
    this.badClick.emit(data);
  }
}
