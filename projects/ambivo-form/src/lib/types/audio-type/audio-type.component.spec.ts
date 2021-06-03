import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTypeComponent } from './audio-type.component';

describe('AudioTypeComponent', () => {
  let component: AudioTypeComponent;
  let fixture: ComponentFixture<AudioTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
