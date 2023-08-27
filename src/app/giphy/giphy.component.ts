import {
	Component,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { Subscription } from 'rxjs';
import { GiphyObject } from '../types/giphy-types';

@Component({
	selector: 'app-giphy',
	templateUrl: './giphy.component.html',
	styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit , OnDestroy{

	constructor(private searchBarService: SearchBarService) {}

	private giphyImageSubscription!: Subscription;

	currentGiphyObject: GiphyObject | null = null;


	ngOnInit(): void {
		// WHENever you call RxJS .subscribe() IT returns a Subscription-type listener -> for async data-communication!
		this.giphyImageSubscription = this.searchBarService.getGiphyData().subscribe((giphyObject) => {this.currentGiphyObject = giphyObject});
	}

	// TODO: add logic to grab the URL from the GiphyObject and then display into the GiphyHTML
	attachGiphyImg() {
	}

	ngOnDestroy(): void {
		// Use to unsubscribe
		this.giphyImageSubscription.unsubscribe();
	}
}
