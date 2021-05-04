import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTypeComponent } from './checkbox-type.component';

describe('CheckboxTypeComponent', () => {
  let component: CheckboxTypeComponent;
  let fixture: ComponentFixture<CheckboxTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
