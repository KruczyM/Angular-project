import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-searching-games',
  templateUrl: './searching-games.component.html',
  styleUrls: ['./searching-games.component.css']
})
export class SearchingGamesComponent implements OnInit {
  @Input() user; User;
  

  games: Game[];
 
  imie : string;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  ngOnInit() {
    const name = +this.route.snapshot.paramMap.get('user');
    this.imie = this.route.snapshot.paramMap.get('user');
    if(this.gameService.sgamesUrl == 'api/sgames')
    {
      this.gameService.setUser(this.imie);
    }
    this.gameService.log(this.gameService.sgamesUrl);
    this.getGames();
    
  }
  

  getGames(): void {
    this.gameService.getSGames().subscribe(games => this.games = games);
    }

    goBack(): void {
      this.location.back();
    }

}
