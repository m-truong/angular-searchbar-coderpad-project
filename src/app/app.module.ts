import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AnimationBuilder } from '@angular/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './services/search-bar.service';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { CarouselModule } from './carousel/carousel.module';

@NgModule({
	declarations: [AppComponent],
	// Note: always add all Angular modules as imports to the imports-array
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		SearchBarModule,
		CarouselModule,
	],
	// Note: always add all Angular services or controllers/resolvers to the providers-array
	providers: [SearchBarService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
