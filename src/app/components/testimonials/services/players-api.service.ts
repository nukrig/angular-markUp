import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {

  private apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl);
  }
}
