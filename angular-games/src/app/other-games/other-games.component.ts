import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-other-games',
  templateUrl: './other-games.component.html',
  styleUrls: ['./other-games.component.css']
})
export class OtherGamesComponent implements OnInit {
  @Input() user; User;
  

  games: Game[];
  ggames: Game[];
 
  imie : string;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  ngOnInit() {
/*
    this.imie = this.route.snapshot.paramMap.get('user');
    if(this.gameService.otherUrl == 'api/games')
    {
      this.gameService.setUser(this.imie);
    }

    this.gameService.log(this.gameService.otherUrl);
    */
    this.getSGames();
    this.getGames();
  }
  

  getSGames(): void {
    this.gameService.getSGames().subscribe(games => this.games = games);
    }

    getGames(): void {
      this.gameService.getGames().subscribe(ggames => this.ggames = ggames);
      }



    goBack(): void {
      this.location.back();
    }
}
