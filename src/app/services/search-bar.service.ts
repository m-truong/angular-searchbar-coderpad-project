import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class SearchBarService {
	constructor(private httpClient: HttpClient) {}

	baseGiphyURL: string = 'https://api.giphy.com/v1/gifs/search';
	giphyAPI_Key: string = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

	private giphyImageRequested: any; 

	sendGiphyRequestToAPI(giphyFormValue: any): Observable<any> {
		const giphyData = this.httpClient.get(this.baseGiphyURL, {
			params: this.createParams(giphyFormValue),
		});
		this.setGiphyData(giphyData);
		return giphyData;
	}

	createParams(giphyFormValue: any): HttpParams {
		let queryParams: any;
		return (queryParams = new HttpParams()
			.append('api_key', this.giphyAPI_Key)
			.append('q', giphyFormValue));
	}

	getGiphyData(): any {
		return this.giphyImageRequested;
	}

	setGiphyData(giphyData: Observable<any>): void {
		this.giphyImageRequested = giphyData;
	}

}
