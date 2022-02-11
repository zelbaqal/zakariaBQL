import { TestBed } from '@angular/core/testing';

import { OutPutService } from './out-put.service';

describe('OutPutService', () => {
  let service: OutPutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutPutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
