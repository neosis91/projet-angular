import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-tvmaze',
  templateUrl: './tvmaze.component.html',
  styleUrls: ['./tvmaze.component.css'],
  providers: [TvmazeService, TranslateService]
})
export class TvmazeComponent  {
  getData: string;
  searchKey: string;
  summaryTranslation: string;

  constructor(private _TvmazeService: TvmazeService, private _TranslateService: TranslateService) {
  }
  getQueryShow() {
    this._TvmazeService.getQueryShow('supergirl')
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log('success')
      );
  }

  translateText(desc, eid) {
    const elem = document.getElementById(eid).parentElement.parentElement.parentElement.getElementsByTagName('p')[0];
    this._TranslateService.getTranslation(desc)
        .subscribe(
            data => elem.innerHTML = data.text,
            error => alert(error),
            () => console.log('success Ts')
        );
  }
  DoSearch() {
    this._TvmazeService.SearchMovie(this.searchKey) .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log('success')
    );
  }
}
