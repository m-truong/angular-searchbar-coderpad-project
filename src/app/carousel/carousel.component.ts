import { Component, Input, OnInit } from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { logger, loggerCommand } from '../shared/utils/common-functions';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
	@Input()
	unnecessaryPassingDownGiphyData: any;

	// internal state
	giphyImageURL: any;

	constructor(private searchBarService: SearchBarService) {}

	ngOnInit(): void {
		this.attachGiphyImg();
	}

	attachGiphyImg() {
		// this.giphyImage = this.searchBarService.giphyImageRequested;
		loggerCommand(
			'~ getting the image from the Observable GiphyAPI data',
			this.unnecessaryPassingDownGiphyData.data
		);
		this.giphyImageURL =
			this.unnecessaryPassingDownGiphyData.data[0].images.origial.url;
	}
}
