import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

@NgModule({
	exports: [CarouselComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [CarouselComponent],
	imports: [CommonModule],
})
export class CarouselModule {}
