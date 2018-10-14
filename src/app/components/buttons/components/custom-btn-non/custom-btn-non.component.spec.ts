import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBtnNonComponent } from './custom-btn-non.component';

describe('CustomBtnNonComponent', () => {
  let component: CustomBtnNonComponent;
  let fixture: ComponentFixture<CustomBtnNonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBtnNonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBtnNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
