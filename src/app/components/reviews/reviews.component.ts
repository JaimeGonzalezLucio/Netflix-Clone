import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/review.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  @Input() review!:Review

}
