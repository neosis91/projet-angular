import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpTestServiceService {

  constructor(private _http: Http) { }
  getCurrentMovie() {
    return this._http.get('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
        .map(res => res.json());
  }
}
