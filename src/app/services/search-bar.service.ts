import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
// Note: HttpParams is required to inject Query Parameters in an HTTP Request
// Note: HttpHeaders is required to add HTTP Headers to a HTTP Request
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class SearchBarService implements OnChanges {
	constructor(private httpClient: HttpClient) {}

	private giphyImageRequested: any; 

	ngOnChanges(changes: SimpleChanges): void {}

	// hardcoded url endpoint
	baseGiphyURL: string = 'https://api.giphy.com/v1/gifs/search';
	giphyAPI_Key: string = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

	setGiphyData(giphyData: any ): void {
		this.giphyImageRequested = giphyData;
		console.log('the giphy data has been set', this.giphyImageRequested)
	}

	getGiphy(giphyFormValue: any): Observable<any> {
		return this.httpClient.get(this.baseGiphyURL, {
			params: this.createParams(giphyFormValue),
		});
	}

	createParams(giphyFormValue: any): HttpParams {
		let queryParams: any;
		return (queryParams = new HttpParams()
			.append('api_key', this.giphyAPI_Key)
			.append('q', giphyFormValue));
	}
}
