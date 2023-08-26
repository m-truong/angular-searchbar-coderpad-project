import {
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

	giphyImageURL: any;

	constructor(private searchBarService: SearchBarService) {}

	ngOnInit(): void {
	}

	attachGiphyImg() {
	}
}
