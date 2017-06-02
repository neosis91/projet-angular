import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 8) {
    // On calcule le nombre de page total
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // moins de 10 pages on affiche tout
      startPage = 1;
      endPage = totalPages;
    } else {
      // on calcule page de depart et de fin
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // on fixe les index de début et de fin
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    //  on construit notre tableau de page
    const pages = _.range(startPage, endPage + 1);

    // retourne la réponse de chacun
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
