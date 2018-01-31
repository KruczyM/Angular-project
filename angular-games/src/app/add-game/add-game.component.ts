import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserPageComponent } from '../user-page/user-page.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  games: Game[];
  
   imie : string;
   a : string;

  ngOnInit() {
    this.gameService.otherUrl = 'api/games';
    this.imie = this.route.snapshot.paramMap.get('user');
    this.a = this.route.snapshot.paramMap.get('di');
  }

  add(name: string,studio:string,language:string,owner:string): void {
    name = name.trim();
    owner = this.imie;
    status = "nieposzukiwany";
    if (!name || !studio || !language || !owner) { return; }
    this.gameService.log(name + studio + language + owner + status);
    if( this.a == "1")
    {
      this.gameService.otherUrl = 'api/sgames';
      status = "poszukiwany";
    }
    this.gameService.addGame({ name,studio,language,owner,status } as Game)
      .subscribe(game => {
        this.games.push(game);
        
      });
  }


  goBack(): void {
    this.location.back();
  }
}
