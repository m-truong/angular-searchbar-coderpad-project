import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyComponent } from './giphy.component';

@NgModule({
	exports: [GiphyComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [GiphyComponent],
	imports: [CommonModule],
})
export class GiphyModule {}
