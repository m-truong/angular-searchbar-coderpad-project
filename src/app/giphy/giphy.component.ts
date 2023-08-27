import {
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { SearchBarService } from '../services/search-bar.service';

@Component({
	selector: 'app-giphy',
	templateUrl: './giphy.component.html',
	styleUrls: ['./giphy.component.scss'],
})
export class GiphyComponent implements OnInit {

	giphyImageURL: any;

	constructor(private searchBarService: SearchBarService) {}

	ngOnInit(): void {
	}

	attachGiphyImg() {
	}
}
