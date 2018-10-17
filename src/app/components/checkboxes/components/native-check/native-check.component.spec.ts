import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeCheckComponent } from './native-check.component';

describe('NativeCheckComponent', () => {
  let component: NativeCheckComponent;
  let fixture: ComponentFixture<NativeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
