import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-check',
  templateUrl: './custom-check.component.html',
  styleUrls: ['./custom-check.component.scss']
})
export class CustomCheckComponent {
  @Output() public customCheck = new EventEmitter();
  public sandwiches = ['Lettuce', 'Tomato', 'Mustard', 'Sprouts'];

  public check(message) {
    this.customCheck.emit({
      ...message,
      role: 'checkbox',
      text: 'Custom checkbox checked',
    });
  }
}
