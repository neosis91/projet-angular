import { Component } from '@angular/core';
import {TvmazeService} from './../tvmaze.service';
import { OnInit } from '@angular/core';
import * as _ from 'underscore';

import { PagerService } from './../pager.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [TvmazeService, PagerService]
})

export class HomeComponent implements OnInit {
    getDataSchedule: void;
    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
    constructor(private _TvmazeService: TvmazeService, private pagerService: PagerService) {
    }

    getSchedule() {
        this._TvmazeService.getSchedule().subscribe(
            data => {
                // set items to json response
                this.allItems = data;
                // initialize to page 1
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

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
