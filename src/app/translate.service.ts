import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TranslateService {

    constructor(private _http: Http) { }
// méthode faisant appel a l'api Yandex (POST)
    getTranslation(desc) {
        const start_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=';
        const key = 'trnsl.1.1.20170531T195324Z.824181b0f7eb4e61.94f227c07a9881e7a8240ce772a1f8a7520e2a20';
        const url = '&text=' + desc + '&lang=en-fr';
        return this._http.get(start_url + key + url)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }

    getTranslationTesting(desc) {
        const start_url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=';
        const key = 'trnsl.1.1.20170531T195324Z.824181b0f7eb4e61.94f227c07a9881e7a8240ce772a1f8a7520e2a20';
        const url = '&text=' + desc + '&lang=en-fr';
        return this._http.get(start_url + key + url);

    }
}