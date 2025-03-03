import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http:HttpClient
  ) { }    

    getReviews(movie_id:number):Observable<any>{
      return this.http.get(environment.apiUrl+`3/movie/${movie_id}/reviews`);
    }

}
