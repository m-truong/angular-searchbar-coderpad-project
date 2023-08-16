import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchbarService } from './services/searchbar.service';

@NgModule({
  declarations: [AppComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SearchbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
