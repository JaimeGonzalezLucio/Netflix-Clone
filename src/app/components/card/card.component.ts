import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() movie!: Movie;
  @Output() id: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  goToMovie() {
    this.id.emit(this.movie.id); // Emitir el ID de la película
  }
  
}
