import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2SearchComponent } from './game2-search.component';

describe('Game2SearchComponent', () => {
  let component: Game2SearchComponent;
  let fixture: ComponentFixture<Game2SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
