import { Component, Output, EventEmitter } from '@angular/core';
// import du service TVmaze
import {TvmazeService} from '../tvmaze.service';
// import du service de traduction
import {TranslateService} from '../translate.service';

@Component({
  selector: 'app-tvmaze',
  templateUrl: './tvmaze.component.html',
  styleUrls: ['./tvmaze.component.css'],
  providers: [TvmazeService, TranslateService]
})
export class TvmazeComponent  {
  // attribut permettant d'afficher la réponse
  getData: string;
  // attribut du texte inseré dans l'input par l'utilisateur
  searchKey: string;
  @Output() isSearching = new EventEmitter<boolean>();

  constructor(private _TvmazeService: TvmazeService, private _TranslateService: TranslateService) {
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
    if (this.searchKey !== '') {
      this.isSearching.emit(true);
    } else {
      this.isSearching.emit(false);
    }
    this._TvmazeService.SearchMovie(this.searchKey) .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log('success')
    );
  }
}
