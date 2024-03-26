import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { CardComponent } from '../card/card.component';
import { Movie, MovieDetail } from '../../interfaces/movie.interface';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ReviewsService } from '../../services/reviews.service';
import { Review } from '../../interfaces/review.interface';
import { CreditsService } from '../../services/credits.service';
import { CreditsCardComponent } from '../credits-card/credits-card.component';
import { CastMember } from '../../interfaces/credits.interface';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    CardComponent,
    NgFor,
    ReviewsComponent,
    CreditsCardComponent,
    InfiniteScrollModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  
  public id!:number
  public page:number =1
  public movieDetail:MovieDetail = <MovieDetail>{}
  public movies:Movie[]=[]
  public reviews:Review[]=[]
  public credits:CastMember[]=[]

  constructor(
    private route:ActivatedRoute,
    private _MoviesService:MoviesService,
    private _reviewsServices:ReviewsService,
    private _creditsServices:CreditsService
  ){
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getDetailMovie(this.id)
    this.getRecommendations(this.id) 
    this.getReviews(this.id)   
    this.getCredits(this.id)
  }

  getDetailMovie(id:number){
    this._MoviesService.getDetail(id).subscribe(resp=>{
      this.movieDetail=resp    
    })
  }

  getRecommendations(id:number){
    this._MoviesService.getRecommendations(id,this.page).subscribe(resp=>{      
      if (resp.results) {
        this.movies.shift
        this.movies = [...this.movies, ...resp.results]; 
      }  
    })
  }

  getReviews(id:number){
    this._reviewsServices.getReviews(id).subscribe(resp=>{
      this.reviews=resp.results      
    })
  }

  getCredits(id:number){
    this._creditsServices.getCredits(id).subscribe(resp=>{
      this.credits = resp.cast  
    })
  }

  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.resetPage(); 
  }

  onScroll(){
    this.page = this.page + 1
    this.getRecommendations(this.id)
  }

  resetPage(){
    this.page = 1
    this.movies = []
  }

}
