import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  public message: any;
  public matIconBtn = {
    text: 'Material with icon button clicked',
    label: '',
    role: 'button',
  };
  public matBtn = {
    text: 'Material button clicked',
    label: 'Click me!',
    role: 'button',
  };

  public onClick(message: string) {
    this.message = message;
  }

}
