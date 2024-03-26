import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ActorsService } from '../../services/actors.service';
import { ActivatedRoute } from '@angular/router';
import { Actor } from '../../interfaces/actor.interface';
import { CommonModule, NgFor } from '@angular/common';
import { CreditsService } from '../../services/credits.service';
import { CharacterCast } from '../../interfaces/character.interface';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    CharacterCardComponent,
    NgFor     
  ],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent implements OnInit{

  public id!:number
  public actorDetail:Actor = <Actor>{}
  public characters:CharacterCast[]=[]

  constructor(
    private _actorServices:ActorsService,
    private _creditsServices:CreditsService,
    private route:ActivatedRoute,
  ){    
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getActorDetail(this.id)
    this.getCreditsActor(this.id)
  }

  getActorDetail(id:number){
    this._actorServices.getActorDetail(id).subscribe(resp=>{
      this.actorDetail=resp            
    })
  }

  getCreditsActor(id:number){
    this._creditsServices.getCreditsCombined(id).subscribe(resp=>{
      this.characters = resp.cast 
    })
  }

}
