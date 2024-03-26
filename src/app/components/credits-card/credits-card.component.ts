import { Component, Input } from '@angular/core';
import { CastMember } from '../../interfaces/credits.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-credits-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './credits-card.component.html',
  styleUrl: './credits-card.component.css'
})
export class CreditsCardComponent {

  @Input() credit!:CastMember

}
