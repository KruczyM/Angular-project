import { Injectable } from '@angular/core';
import { Game } from './game';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User, Comm} from './user';
import { Subject }    from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GameService {


  
  users: User[]; 
  comments: Comm[]; 
  private gamesUrl = 'api/games';  // URL to web api
  public gamesUUrl = 'api/games';
  public usersUrl = 'api/users';
  public sgamesUrl = 'api/sgames';
  public sgamesUUrl = 'api/sgames';
  public otherUrl = 'api/games';
  public comUrl = 'api/comments';
  public imie ="";
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    /** Log a HeroService message with the MessageService */
public log(message: string) {
  this.messageService.add('GameService: ' + message);
}

  setUser(a: string): void
  {
      this.gamesUUrl += "?owner=^" + a  ;
      this.sgamesUrl += "?owner=^" + a ;
      this.comUrl += "?to=^" + a  ;
      this.usersUrl += "?user=^" + a  ;
  }

  setU(a: string): void{
    this.gamesUUrl = a;
 
  }

  setS(a: string):void{
    this.sgamesUrl = a;
  
  }

  setC(a: string):void{
    this.comUrl = a;
  
  }

  setUs(a: string):void{
    this.usersUrl = a;
  
  }


  getCom(): Observable<Comm[]> {
    return this.http.get<Comm[]>(this.comUrl)
    .pipe(
      tap(comments => this.log(`fetched games`)),
      catchError(this.handleError('getGames', []))
    );
  }

  getSGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.sgamesUrl)
    .pipe(
      tap(games => this.log(`fetched games`)),
      catchError(this.handleError('getGames', []))
    );
  }
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
    .pipe(
      tap(games => this.log(`fetched games`)),
      catchError(this.handleError('getGames', []))
    );
  }

  getUserGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUUrl)
    .pipe(
      tap(games => this.log(`fetched games`)),
      catchError(this.handleError('getGames', []))
    );
  }


  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(_ => this.log(`fetched game id=${id}`)),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  getSGame(id: number): Observable<Game> {
    const url = `${this.sgamesUUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(_ => this.log(`fetched game id=${id}`)),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(users => this.log(`fetched users`)),
      catchError(this.handleError('getUsers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/** POST: add a new game to the server */
addGame (game: Game): Observable<Game> {
  return this.http.post<Game>(this.otherUrl, game, httpOptions).pipe(
    tap((game: Game) => this.log(`added game w/ id=${game.id}`)),
    catchError(this.handleError<Game>('addGame'))
  );
}

/* GET heroes whose name contains search term */
searchGames(term: string): Observable<Game[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Game[]>(`api/games/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Game[]>('searchGames', []))
  );
}

searchSGames(term: string): Observable<Game[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Game[]>(`api/sgames/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Game[]>('searchGames', []))
  );
}

/** POST: add a new comm to the server */
addComm (com: Comm): Observable<Comm> {
  return this.http.post<Comm>(this.comUrl, com, httpOptions).pipe(
    tap((com: Comm) => this.log(`added com`)),
    catchError(this.handleError<Comm>('addCom'))
  );
}

}

