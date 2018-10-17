import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeSelectComponent } from './native-select.component';

describe('NativeSelectComponent', () => {
  let component: NativeSelectComponent;
  let fixture: ComponentFixture<NativeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
