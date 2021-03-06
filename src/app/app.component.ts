///<reference path="auth/auth.service.ts"/>
import { Component } from '@angular/core';
import {TvmazeService} from './tvmaze.service';
import { OnInit } from '@angular/core';

import { PagerService } from './pager.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TvmazeService, PagerService]
})

export class AppComponent implements OnInit {
  getDataSchedule: void;
  profilePicture: string;
  private allItems: any[];
  pager: any = {};
  // paged items
  pagedItems: any[];
  constructor(public auth: AuthService, private _TvmazeService: TvmazeService, private pagerService: PagerService) {
    auth.handleAuthentication();
    if (this.auth.isAuthenticated()) {
      this.auth.getProfile((err, profile) => {
        this.profilePicture = profile.picture;
      });
    }

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
    // retourne top de la page
    window.scrollTo(0, 0);
  }
}
