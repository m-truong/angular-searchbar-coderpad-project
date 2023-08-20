import { Component } from '@angular/core';
import { SearchBarService } from './services/search-bar.service';
import { logger } from './shared/utils/common-functions';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-searchbar-coderpad-project';

	constructor(private searchBarService: SearchBarService) {}

	searchServiceData: any = null;

	ngOnInit() {
		logger('MainAngularApp', this);
		// this.subscribeToService();
	}

	// Add a subscription method to check if the search-bar-service has data

	subscribeToService(evt: any): void {
		// this.searchServiceData = this.searchBarService.giphyImageRequested;
		this.searchServiceData = evt;
	}
}
