import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxesComponent } from './listboxes.component';

describe('ListboxesComponent', () => {
  let component: ListboxesComponent;
  let fixture: ComponentFixture<ListboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
