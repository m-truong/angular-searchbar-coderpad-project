import { Component } from '@angular/core';
import { SearchbarService } from './services/searchbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-searchbar-coderpad-project';

  constructor(private searchBarService: SearchbarService) {}
}
