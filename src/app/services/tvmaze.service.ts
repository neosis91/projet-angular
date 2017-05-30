import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TvmazeService {

  constructor(private _http: Http) { }

  postQueryShow() {
    return this._http.post('http://api.tvmaze.com/search/shows', {q: 'test'})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

}
