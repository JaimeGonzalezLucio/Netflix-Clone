import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(page:number):Observable<any>{    
    return this.http.get(environment.apiUrl+`3/discover/movie?language=en-US&page=${page}` )
  }

  getDetail(movieId:number):Observable<any>{    
    return this.http.get(environment.apiUrl+`3/movie/${movieId}` )
  }

  getRecommendations(movieId:number,page:number):Observable<any>{
    return this.http.get(environment.apiUrl+`3/movie/${movieId}/recommendations?language=en-US&page=${page}` )    
  } 

}
