import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game2-search',
  templateUrl: './game2-search.component.html',
  styleUrls: ['./game2-search.component.css']
})
export class Game2SearchComponent implements OnInit {
  games$: Observable<Game[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private gameService: GameService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.games$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gameService.searchSGames(term)),
    );

  }
}


