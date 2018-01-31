import { Component } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 
export class AppComponent {

  
  constructor() {
    
  }
  title = 'game-page';
  hello = 'Witaj gamerze';

}
