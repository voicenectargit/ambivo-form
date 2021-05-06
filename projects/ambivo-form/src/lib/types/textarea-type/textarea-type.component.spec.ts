import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaTypeComponent } from './textarea-type.component';

describe('TextareaTypeComponent', () => {
  let component: TextareaTypeComponent;
  let fixture: ComponentFixture<TextareaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
