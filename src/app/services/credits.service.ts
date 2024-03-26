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

  private options = {      
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTIxYmNlYjY0YTZiMjcyNTkxMWNkNDY3NmNlMWU1ZiIsInN1YiI6IjY1ZWEzNjUxNmEyMjI3MDE4Njk2ZWUxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ney7nwqL7IlLWul1FOJxSioehd_mh9KgQK5o549VNEg'
    }
  };

  getCredits(id:number):Observable<MovieCast>{
    return this.http.get<MovieCast>(environment.apiUrl+ `3/movie/${id}/credits` ,this.options)
  }

  getCreditsCombined(id:number):Observable<CharacterCastList>{
    return this.http.get<CharacterCastList>(environment.apiUrl+ `3/person/${id}/combined_credits` ,this.options)
  }  

}
