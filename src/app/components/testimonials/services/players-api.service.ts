import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iplayers } from '../interface/testimonials.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersApiService {

  private apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Iplayers> {
    return this.http.get<Iplayers>(this.apiUrl);
  }
}
