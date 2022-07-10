import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cricketer, DEFAULTCHESSCONTENT } from '../data/mock-player';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getContent(): Observable<Content[]> {
    return of(cricketer);
  }

  /**
   * Returns a single content item at a specified id
   * @param id
   * @returns
   */
   getContentItem(id: number): Observable<Content> {
    return of(cricketer[id]);
  }

  addContentItem(newContentItem: Content): Observable<Content[]> {
    // if there aren't some chess champions with the same id number, push the array item
    if (!cricketer.some(chessPlayer => chessPlayer.id === newContentItem.id)) {
      cricketer.push(newContentItem);
    }
    return of(cricketer);
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in chesschampions with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating

    cricketer.forEach((individualChessChampion, index) => {

      if (individualChessChampion.id === newContentItem.id) // found them
      {
        console.log("Trying method 2");
        cricketer[index] = newContentItem;
        // return;
      }
    });

    return of(cricketer);
  }

  deleteContentItem(id: number): Observable<Content> {

    for (var i = 0; i < cricketer.length; i++) // iterate through each chess champion
    {
      if (cricketer[i].id === id) { // found the item
        // delete it from the array first
        cricketer.splice(i, 1);
        console.log("Deleted the item: ", cricketer);
        return of(cricketer[i]);
      }
    }
    return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
  }
}
