import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TvmazeService {

  constructor(private _http: Http) { }
  // méthode faisant appel a l'api TVmaze (POST)
  SearchMovie(searchKey: string) {
    const url = 'http://api.tvmaze.com/search/shows?q=' + searchKey;
    return this._http.get(url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
  }
  getSchedule() {

    const dateToday = new Date().toJSON().slice(0, 10);
    const url = 'http://api.tvmaze.com/schedule?date=' + dateToday;
    console.log('url: ' + url);
    return this._http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }
}
