import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';
import { logger, loggerCommand } from '../shared/utils/common-functions';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
	@Input()
	unnecessaryPassingDownGiphyData: any;

	// internal state
	giphyImageURL: any;

	constructor(private searchBarService: SearchBarService) {}

	ngOnInit(): void {
		// this.attachGiphyImg();
	}

	ngOnChanges(changes: SimpleChanges): void {
		// if (changes['unnecessaryPassingDownGiphyData'].isFirstChange()) {
		// this.giphyImageURL = this.unnecessaryPassingDownGiphyData;
		// }
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
