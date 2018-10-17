import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
 @Input() public option: string;
 @Output() public change = new EventEmitter();
 public isChecked = false;
  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.isChecked = this.isChecked ? false : true;
    this.change.emit({checked: this.isChecked ? 'checked' : 'not checked', label: this.option});
  }
}
