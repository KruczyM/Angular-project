import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameService } from './game.service';
import { MessageService} from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';



import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { UserPageComponent } from './user-page/user-page.component';
import { SearchingGamesComponent } from './searching-games/searching-games.component';
import { OtherGamesComponent } from './other-games/other-games.component';
import { AddGameComponent } from './add-game/add-game.component';
import { GameSearchComponent } from './game-search/game-search.component';
import { Game2SearchComponent } from './game2-search/game2-search.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GamesComponent,
    GameDetailComponent,
    MessagesComponent,
    UserPageComponent,
    SearchingGamesComponent,
    OtherGamesComponent,
    AddGameComponent,
    GameSearchComponent,
    Game2SearchComponent,
    UserDetailComponent,
    InfoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [GameService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
