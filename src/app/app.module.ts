import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { AnimationBuilder } from '@angular/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './services/search-bar.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
	declarations: [AppComponent, SearchBarComponent, CarouselComponent],
	// Note: always add all Angular modules as imports to the imports-array
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	// Note: always add all Angular services or controllers/resolvers to the providers-array
	providers: [SearchBarService],
	bootstrap: [AppComponent],
})
export class AppModule {}
