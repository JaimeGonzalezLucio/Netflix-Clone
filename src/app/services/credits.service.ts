import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieCast } from '../interfaces/credits.interface';
import { CharacterCastList } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(
    private http:HttpClient
  ) { }

  getCredits(id:number):Observable<MovieCast>{
    return this.http.get<MovieCast>(environment.apiUrl+ `3/movie/${id}/credits`)
  }

  getCreditsCombined(id:number):Observable<CharacterCastList>{
    return this.http.get<CharacterCastList>(environment.apiUrl+ `3/person/${id}/combined_credits`)
  }  

}
