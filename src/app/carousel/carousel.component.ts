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

	// internal state
	giphyImageURL: any;

	constructor(private searchBarService: SearchBarService) {}

	ngOnInit(): void {
		// this.attachGiphyImg();
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.attachGiphyImg();
	}

	attachGiphyImg() {
	}
}
