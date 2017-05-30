import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TvmazeService {

  constructor(private _http: Http) { }

  getQueryShow(recherche) {
    const url = 'http://api.tvmaze.com/search/shows?q=' + recherche;
    return this._http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }
  SearchMovie(searchKey: string) {
    const url = 'http://api.tvmaze.com/search/shows?q=' + searchKey;
    return this._http.get(url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
  }
}
