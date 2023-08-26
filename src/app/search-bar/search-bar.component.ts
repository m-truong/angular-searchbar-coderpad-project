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

	ngOnInit() {
		logger('SearchBar', this);
	}

	sendGiphyRequest(): void {
		let dataReq: any = this.searchBarService.getGiphy().subscribe();
		this.storeReturnedRequest(dataReq);
	}

	storeReturnedRequest(dataPassDown: any): void {
		// this.searchBarService.giphyImageRequested = dataPassDown;
		this.searchBarService.setGiphyData(dataPassDown);
	}
}
