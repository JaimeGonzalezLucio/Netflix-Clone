import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Actor } from '../interfaces/actor.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(
    private http:HttpClient
  ) { }

  private options = {      
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTIxYmNlYjY0YTZiMjcyNTkxMWNkNDY3NmNlMWU1ZiIsInN1YiI6IjY1ZWEzNjUxNmEyMjI3MDE4Njk2ZWUxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ney7nwqL7IlLWul1FOJxSioehd_mh9KgQK5o549VNEg'
    }
  };

  getActorDetail(id:number):Observable<Actor>{
    return this.http.get<Actor>(environment.apiUrl+`3/person/${id}`, this.options)
  }

}
