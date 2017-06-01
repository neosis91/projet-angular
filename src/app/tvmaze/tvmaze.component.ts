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
    let elem = document.getElementById(eid).parentElement.parentElement.parentElement.getElementsByTagName('p');
    console.log(elem);
    this._TranslateService.getTranslation(desc)
        .subscribe(
            data => function(){
            },
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
