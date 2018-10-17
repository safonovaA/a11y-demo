import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listboxes',
  templateUrl: './listboxes.component.html',
  styleUrls: ['./listboxes.component.scss']
})
export class ListboxesComponent implements OnInit {
  public optionValues = ['water', 'tea', 'coffee', 'beer'];
  constructor() { }

  ngOnInit() {
  }

}
