import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingGamesComponent } from './searching-games.component';

describe('SearchingGamesComponent', () => {
  let component: SearchingGamesComponent;
  let fixture: ComponentFixture<SearchingGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
