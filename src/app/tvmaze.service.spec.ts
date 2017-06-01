import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [TvmazeService]
    });
  });

  it('should be created', inject([TvmazeService], (service: TvmazeService) => {
    expect(service).toBeTruthy();
  }));
});
