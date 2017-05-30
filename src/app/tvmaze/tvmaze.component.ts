import { Component, OnInit } from '@angular/core';
import {TvmazeService} from '../tvmaze.service';

@Component({
  selector: 'app-tvmaze',
  templateUrl: './tvmaze.component.html',
  styleUrls: ['./tvmaze.component.css'],
  providers: [TvmazeService]
})
export class TvmazeComponent  {
  getData: string;
  searchKey: string;

  constructor(private _TvmazeService: TvmazeService) {
  }
  getQueryShow() {
    this._TvmazeService.getQueryShow('supergirl')
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log('success')
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
