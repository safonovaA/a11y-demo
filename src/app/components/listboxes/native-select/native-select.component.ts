import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-native-select',
  templateUrl: './native-select.component.html',
  styleUrls: ['./native-select.component.scss']
})
export class NativeSelectComponent {
  @Input() public options: string[];
}
