import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyComponent } from './giphy.component';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiphyComponent]
    });
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
