import { TestBed } from '@angular/core/testing';

import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  let service: WidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWidget():', () => {
    it('should get widget', () => {});
  });
  describe('executeWidget():', () => {
    it('should execute widget', () => {});
  });
});
