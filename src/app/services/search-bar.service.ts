import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';
import { GiphyObject } from '../types/giphy-types';

@Injectable({
	providedIn: 'root',
})
export class SearchBarService {
	// TODO: Set up the behaviorSubject to be subscribed to after the <input> Form gets submitted
	// TODO: Then the inside the giphy-component ; it should subscribe to the SearchBarService
	// TODO: Since it's waiting on the Subject<> data ; ADD a LifeCycleHook called ngOnInit
	// TODO: It should subscribe to the Subject<> data ; using ngOnInit
	// TODO: It'll be a an RXJS subscription ; SO that when the data is available
	// TODO: It automatically GETS populated INSIDE the GiphyImage component
	constructor(private httpClient: HttpClient) {}

	baseGiphyURL: string = 'https://api.giphy.com/v1/gifs/search';
	giphyAPI_Key: string = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

	// Note: calling the constructor to pass initial value as null?
	// you're setting the Observable<network request> as a SUBSCRIBABLE Data?
	private giphyImageRequestedData = new BehaviorSubject<GiphyObject|null>(null);

	sendGiphyRequestToAPIAndReturnObservable(giphyFormValue: any): Observable<any> {
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

	// Note: this syntax is the union-type
	// Getters
	getGiphyData(): Observable<GiphyObject|null> {
		return this.giphyImageRequestedData.asObservable();
	}

	// setters
	setGiphyData(giphyData: any): void {
		// Note: this is the WRONG way to set a RxJS Subject data
		// this.giphyImageRequestedData = giphyData;
		// Note: Correct way is to call.next on the Behavior Subject


		this.giphyImageRequestedData.next(giphyData);
	}

}
