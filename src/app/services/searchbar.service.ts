import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class SearchbarService {
  gifyAPI_Key = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

  constructor(private httpClient: HttpClient) {}

  getGiphy() {
    // this.httpClient.get
  }
}
