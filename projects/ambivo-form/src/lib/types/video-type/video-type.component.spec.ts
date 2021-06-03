import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTypeComponent } from './video-type.component';

describe('VideoTypeComponent', () => {
  let component: VideoTypeComponent;
  let fixture: ComponentFixture<VideoTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
