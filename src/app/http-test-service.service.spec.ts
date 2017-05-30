import { TestBed, inject } from '@angular/core/testing';

import { HttpTestServiceService } from './http-test-service.service';

describe('HttpTestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTestServiceService]
    });
  });

  it('should be created', inject([HttpTestServiceService], (service: HttpTestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
