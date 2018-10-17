import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-native-check',
  templateUrl: './native-check.component.html',
  styleUrls: ['./native-check.component.scss']
})
export class NativeCheckComponent implements OnInit {
  @Output() public nativeCheck = new EventEmitter();
  public isChecked = false;
  constructor() { }

  public ngOnInit() {
  }

  public check() {
    this.isChecked = this.isChecked ? false : true;
    this.nativeCheck.emit({
      role: 'checkbox',
      checked: this.isChecked ? 'checked' : 'not checked',
      label: 'Check me!',
      text: 'Native checkbox checked',
    });
  }

}
