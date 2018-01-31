import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserPageComponent } from '../user-page/user-page.component';
import{ User } from '../user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  imie : string;
  users: User[] = [];


  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.imie = this.route.snapshot.paramMap.get('user');
    
    if (this.gameService.gamesUUrl != 'api/games' )
    {
      this.gameService.setU('api/games');
    }
    if (this.gameService.sgamesUrl != 'api/sgames' )
    {
      this.gameService.setS('api/sgames');
    }
    if (this.gameService.comUrl != 'api/comments' )
    {
      this.gameService.setC('api/comments');
    }
    if (this.gameService.usersUrl != 'api/users' )
    {
      this.gameService.setUs('api/users');
    }
    this.getUsers();
    this.gameService.imie = this.imie;
    this.gameService.log(this.gameService.imie);
  }

  getUsers(): void {
    this.gameService.getUsers()
      .subscribe(users => this.users = users);
  }

  goBack(): void {
    this.location.back();}
}

