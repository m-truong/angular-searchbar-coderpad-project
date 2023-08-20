import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
// Note: HttpParams is required to inject Query Parameters in an HTTP Request
// Note: HttpHeaders is required to add HTTP Headers to a HTTP Request
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root',
})
export class SearchBarService implements OnChanges {
	// Note: The HttpClient is the main service, which Performs the HTTP requests like GET, PUT, POST, etc. We need to inject this into our GitHubService.
	constructor(private httpClient: HttpClient) {}

	// TODO 1: get 2-way data-binding for input search

	// TODO:
	giphyImageRequested: any; // Todo: HOW TO MAKE this data variable watchable()

	ngOnChanges(changes: SimpleChanges): void {}

	// hardcoded url endpoint
	baseGiphyURL: string = 'https://api.giphy.com/v1/gifs/search';
	giphyAPI_Key: string = 'UVEOZu2f6XGWLOatqBC5aGOmbqlpHNmV';

	getGiphy(): Observable<any> {
		// Important: new technique of chaining multiple .append() methods to HttpParams() Angular module

		// REFACTOR 1: let queryParams = new HttpParams()
		// 	.append('api_key', this.giphyAPI_Key)
		// 	.append('q', 'cheeseburgers');

		// REFACTOR 2: this.createParams();

		return this.httpClient.get(this.baseGiphyURL, {
			params: this.createParams(),
		});
	}

	createParams(): HttpParams {
		let queryParams: any;
		return (queryParams = new HttpParams()
			.append('api_key', this.giphyAPI_Key)
			.append('q', 'cheeseburgers'));
	}

	// Add a method that will EMIT an Event using EventEmitter to rest of searchbar_app
	// the method should send the data via EventEmitter

	// Add an eventListener on the CarouselComponent
	// that listens for changeDetection of the data
	// then display the data

	// searchBarServiceDataChangeDetection(): void {}
}
