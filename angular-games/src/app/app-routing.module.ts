import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent }  from './games/games.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { UserPageComponent } from './user-page/user-page.component'
import { SearchingGamesComponent } from './searching-games/searching-games.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { AddGameComponent} from './add-game/add-game.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InfoComponent } from './info/info.component';

const routes: Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'games/:user', component: GamesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: GameDetailComponent},
  { path: 'detail/:di/:id', component: GameDetailComponent},
  { path: 'user-page/:user', component: UserPageComponent},
  { path: 'searching-games/:user', component: SearchingGamesComponent},
  { path: 'other-games/:user', component: OtherGamesComponent },
  { path: 'add-game/:user', component: AddGameComponent},
  { path: 'add-game/:di/:user', component: AddGameComponent},
  { path: 'user-detail/:user', component: UserDetailComponent},
  { path: 'info/:user', component: InfoComponent},
] 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})



export class AppRoutingModule { }
