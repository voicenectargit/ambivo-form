import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbivoFormComponent } from './ambivo-form.component';

describe('AmbivoFormComponent', () => {
  let component: AmbivoFormComponent;
  let fixture: ComponentFixture<AmbivoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbivoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
