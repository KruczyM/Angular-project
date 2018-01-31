import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Game } from '../game';
import { GameService } from '../game.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;

  a : string;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location

  ){}

  ngOnInit() {
    this.a = this.route.snapshot.paramMap.get('di');
    this.gameService.log(this.a);
    if(this.a == "1")
    {
      this.getSGame();
    }
    else{
      this.getGame();
    }
    
  }

  getGame(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }
  getSGame(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getSGame(id)
      .subscribe(game => this.game = game);
  }

  goBack(): void {
    this.location.back();
  }

}
