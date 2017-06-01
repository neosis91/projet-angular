import {TestBed, inject} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TvmazeService } from './tvmaze.service';
//import { MockBackend, MockConnection } from '@angular/http/testing';

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

  describe('Search Movies', () => {

    it('API connection', inject([TvmazeService], (service: TvmazeService) => {
      service.SearchMovieTesting("attack on titan").subscribe((successResult) => {
        expect(successResult).toBeDefined();
        expect(successResult.status).toBe(200);
      });
    }));


    it('should be created', inject([TvmazeService], (service: TvmazeService) => {
      service.SearchMovie("attack on titan").subscribe((videos) => {
          expect(videos.length).toBe(3);
          expect(videos[0].show.name).toEqual("Attack on Titan");
      });
    }));
  });

});
