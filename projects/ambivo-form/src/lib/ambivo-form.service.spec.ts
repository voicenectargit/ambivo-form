import { TestBed } from '@angular/core/testing';

import { AmbivoFormService } from './ambivo-form.service';

describe('AmbivoFormService', () => {
  let service: AmbivoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbivoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
