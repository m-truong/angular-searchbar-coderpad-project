import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
	imports: [CommonModule],
	exports: [SearchBarComponent],
	declarations: [SearchBarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchBarModule {}
