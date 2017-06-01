import { Component, OnInit } from '@angular/core';
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

  constructor(private _TvmazeService: TvmazeService, private _TranslateService: TranslateService) {
  }
 // Methode traduction du texte
  translateText(desc, eid) {
    const elem = document.getElementById(eid).parentElement.parentElement.parentElement.getElementsByTagName('p')[0];
    this._TranslateService.getTranslation(desc)
        .subscribe(
            data => elem.innerHTML = data.text,
            error => alert(error),
            () => console.log('Text translated with success')
        );
  }
  // Methode recherche de film via l'input
  DoSearch() {
    this._TvmazeService.SearchMovie(this.searchKey) .subscribe(
        data => this.getData = data,
        error => alert(error),
        () => console.log('success')
    );
  }
}
