import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserPageComponent } from '../user-page/user-page.component';
import { User,Comm} from '../user';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  games: Game[];
  sgames: Game[];
  users: User[] = [];
  comm: Comm[];
  
   imie : string;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.imie = this.route.snapshot.paramMap.get('user');
    if(this.gameService.sgamesUrl == 'api/sgames')
    {
      this.gameService.setUser(this.imie);
    }
    this.gameService.log(this.gameService.imie);
    this.getGames();
    this.getSGames();
    this.getUsers();
    this.getComments();
  }

  getSGames(): void {
    this.gameService.getSGames().subscribe(games => this.sgames = games);
    }

  getGames(): void {
    this.gameService.getUserGames().subscribe(games => this.games = games);
    }

  getUsers(): void {
    this.gameService.getUsers().subscribe(users => this.users = users);
    }
  getComments(): void {
    this.gameService.getCom().subscribe( comm=> this.comm = comm);
    }
  
    add(what: string): void {
      what = what.trim();
      
      var from = this.imie;
      var to = this.gameService.imie;
      if (!what) { return; }
      if (from === to) { return; }
      this.gameService.log(from+to+what);
      this.gameService.addComm({ from,to,what } as Comm)
        .subscribe(com => {
          this.comm.push(com);
        });
        
    }


    goBack(): void {
      this.location.back();
    }

}
