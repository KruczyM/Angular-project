import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService} from '../game.service';
import { AppComponent } from '../app.component';
import { Output } from '@angular/core/src/metadata/directives';
import { User } from '../user';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() user; User;

  imie : string;
  
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
    
  ) { }

 

  ngOnInit() {
    const namee = this.route.snapshot.paramMap.get('user');
    this.gameService.log(namee);
    this.imie = namee;
    
    if (this.gameService.gamesUUrl != 'api/games' )
    {
      this.gameService.setU('api/games');
    }
    if (this.gameService.sgamesUrl != 'api/sgames' )
    {
      this.gameService.setS('api/sgames');
    }
   
  }
  goBack(): void {
    this.location.back();}
}
