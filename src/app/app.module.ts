import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AnimationBuilder } from '@angular/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './services/search-bar.service';
import { GiphyComponent } from './giphy/giphy.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { GiphyModule } from './giphy/giphy.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		SearchBarModule,
		GiphyModule,
	],
	providers: [SearchBarService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
