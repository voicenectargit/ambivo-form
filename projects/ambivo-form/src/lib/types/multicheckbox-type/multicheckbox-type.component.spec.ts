import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticheckboxTypeComponent } from './multicheckbox-type.component';

describe('MulticheckboxTypeComponent', () => {
  let component: MulticheckboxTypeComponent;
  let fixture: ComponentFixture<MulticheckboxTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticheckboxTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticheckboxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
