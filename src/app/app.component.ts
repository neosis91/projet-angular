import { Component } from '@angular/core';
import {TvmazeService} from './tvmaze.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TvmazeService]
})

export class AppComponent implements OnInit {
  getDataSchedule: void;
  programHidden: any = false;
  onUpdate(state: boolean) {  
    this.programHidden = state;
  }
  constructor(private _TvmazeService: TvmazeService) {
  }

  getSchedule() {
    this._TvmazeService.getSchedule() .subscribe(
      data => this.getDataSchedule = data,
      error => alert(error),
      () => console.log('success')
    );
  }
  ngOnInit(): void {
    this.getDataSchedule = this.getSchedule();
  }
}
