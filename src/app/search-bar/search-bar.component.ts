// INSTRUCTIONS:
/**
 * 1. build an angular search bar component
 * 2. it should take users input
 * 3. then it should send requests to GifyApi
 * 4. and it should return those images being displayed in a Grid
 */

/**
 * whiteboard:
 * - app component should house the search logic - and stateful
 * - the search bar should take users <input> and pass that data back up to the <App> main component
 * -
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchBarService } from '../services/search-bar.service';
import { GiphyObject } from '../types/giphy-types';
import { logger } from '../shared/utils/common-functions';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
	// TODO: search-bar just contains the string that the <inpu> user adds to send teh text data
	// but should the search-bar component store the
	constructor(private searchBarService: SearchBarService) {}

	@Output()
	searchBarData: EventEmitter<any> = new EventEmitter<any>();

	ngOnInit() {
		logger('SearchBar', this);
	}

	// Encapsulation question?
	// So the sendGiphyRequest from inside the search-bar Component will make the call and then store the data inside the searchBarService?
	sendGiphyRequest(): void {
		// REFACTOR LOGIC:
		let dataReq: any = this.searchBarService.getGiphy().subscribe();
		this.storeReturnedRequest(dataReq);
		// this.searchBarService.data = dataReq;
		// optionally rturning this [data] if whenever IT IS INVOKED!
		this.searchBarData = dataReq;
	}

	liftDataBackToParent(data: any): void {
		this.searchBarData = data;
	}

	storeReturnedRequest(dataPassDown: any): void {
		this.searchBarService.giphyImageRequested = dataPassDown;
	}
}
