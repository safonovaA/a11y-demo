import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeBtnComponent } from './native-btn.component';

describe('NativeBtnComponent', () => {
  let component: NativeBtnComponent;
  let fixture: ComponentFixture<NativeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
