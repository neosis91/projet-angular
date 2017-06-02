import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
// import du service TVmaze
import {TvmazeService} from '../tvmaze.service';
// import du service de traduction
import {TranslateService} from '../translate.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tvmaze',
  templateUrl: './tvmaze.component.html',
  styleUrls: ['./tvmaze.component.css'],
  providers: [TvmazeService, TranslateService]
})
export class TvmazeComponent implements OnInit {
  // attribut permettant d'afficher la réponse
  getData: string;
  // attribut du texte inseré dans l'input par l'utilisateur
  searchKey: string;
  @Output() isSearching = new EventEmitter<boolean>();

  constructor(public auth: AuthService, private _TvmazeService: TvmazeService, private _TranslateService: TranslateService, private location: Location) {
      auth.handleAuthentication();
  }
  ngOnInit() {

  }
 // Methode traduction du texte
  translateText(element) {
    this._TranslateService.getTranslation(element.show.summary)
        .subscribe(
            data => element.show.summary = data.text,
            error => alert(error),
            () => console.log('Text translated with success')
        );
  }
  // Methode recherc
  // he de film via l'input
  DoSearch() {
    // if (this.searchKey !== '') {
    //   this.isSearching.emit(true);
    // } else {
    //   this.isSearching.emit(false);
    // }
    this._TvmazeService.SearchMovie(this.searchKey) .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log('success')
    );
  }
  goBack(): void {
    this.location.back();
  }
}
