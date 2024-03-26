import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule, NgFor } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { CardComponent } from '../card/card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
    CommonModule,
    SliderComponent,
    CardComponent,
    InfiniteScrollModule,    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public page:number = 1
  public movies:Movie[]=[]

  constructor(
    private readonly _MoviesService:MoviesService
  ){}

  //private readonly _MoviesService = inject(MoviesService,{optional: true})

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {    
    this._MoviesService.getMovies(this.page).subscribe(resp => {        
      if (resp.results) {
        this.movies = [...this.movies, ...resp.results]; 
      }   
    });
  }

  onScroll() {
    this.page = this.page + 1
    this.getData()
  }

}
