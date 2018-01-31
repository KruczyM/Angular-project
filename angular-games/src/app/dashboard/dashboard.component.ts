import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import{ User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    if (this.gameService.usersUrl != 'api/users' )
    {
      this.gameService.setUs('api/users');
    }
    this.getUsers();
    
  }

  getUsers(): void {
    this.gameService.getUsers()
      .subscribe(users => this.users = users);
  }
}