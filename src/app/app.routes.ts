import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ActorComponent } from './components/actor/actor.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Inicio'},
    {path:'detail/:id', component:DetailComponent, title:'Detalle'},    
    {path:'actor/:id', component:ActorComponent, title:'Actor'},    
];
