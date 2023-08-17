import { Injectable } from '@angular/core';
// Note: HttpParams is required to inject Query Parameters in an HTTP Request
// Note: HGttpHeaders is required to add HTTP Headers to a HTTP Request
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class SearchbarService {

  constructor(private httpClient: HttpClient) {}

  giphyURL: string = 'api.giphy.com/v1/gifs/search';
  giphyAPI_Key: string  = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

  getGiphy(): Observable<any> {
    this.httpClient.get(this.giphyURL, { [ params: this.giphyAPI_Key] });

    return null;
  }
}
