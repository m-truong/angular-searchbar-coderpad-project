import { Component } from '@angular/core';
import { SearchBarService } from './services/search-bar.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-searchbar-coderpad-project';

	constructor(private searchBarService: SearchBarService) {}
}
