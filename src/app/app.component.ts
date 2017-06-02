import { Component } from '@angular/core';
import {TvmazeService} from './tvmaze.service';
import { OnInit } from '@angular/core';

import { PagerService } from './pager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TvmazeService, PagerService]
})

export class AppComponent implements OnInit {
  getDataSchedule: void;
  programHidden: any = false;
  private allItems: any[];
  pager: any = {};
  // paged items
  pagedItems: any[];
  // Permet d'afficher ou non le programme
  onUpdate(state: boolean) {this.programHidden = state;
  }
  constructor(private _TvmazeService: TvmazeService, private pagerService: PagerService) {
  }
  getSchedule() {
    this._TvmazeService.getSchedule().subscribe(
      data => {
        // on set les données
        this.allItems = data;
        // initialise la premiere page
        this.setPage(1);
      },
      error => alert(error),
      () => console.log('success')
    );
  }

  ngOnInit(): void {
    this.getDataSchedule = this.getSchedule();
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // on recupere le tableau de page
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // on recupere la page courante
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
