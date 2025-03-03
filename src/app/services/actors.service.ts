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

  getActorDetail(id:number):Observable<Actor>{
    return this.http.get<Actor>(environment.apiUrl+`3/person/${id}`)
  }

}
