import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cricketer, DEFAULTCHESSCONTENT } from '../data/mock-player';
import { Content } from '../models/content';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("/api/cricket");
  }

  /**
   * Returns a single content item at a specified id
   * @param id
   * @returns
   */
   getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/cricket/" + id);
  }

  addContentItem(newContentItem: Content): Observable<Content> {
    // if there aren't some chess champions with the same id number, push the array item
    return this.http.post<Content>("/api/cricket", newContentItem, this.httpOptions)
  }

  updateContentItem(newContentItem: Content): Observable<Content[]> {
    // find item in chesschampions with same id as newcontentitem's id
    // update the values of that item in the array with the values of the newContentItem
    // return the array after updating
    return this.http.put<any>("api/cricket", newContentItem, this.httpOptions);
  }

  // deleteContentItem(id: number): Observable<Content> {

  //   for (var i = 0; i < cricketer.length; i++) // iterate through each chess champion
  //   {
  //     if (cricketer[i].id === id) { // found the item
  //       // delete it from the array first
  //       cricketer.splice(i, 1);
  //       console.log("Deleted the item: ", cricketer);
  //       return of(cricketer[i]);
  //     }
  //   }
  //   return of(DEFAULTCHESSCONTENT); // need to return something if the content isn't there
  // }
}
