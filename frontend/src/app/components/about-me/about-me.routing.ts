import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilComponent } from '../edit-profil/edit-profil.component';
import { AboutMeComponent } from './global/about-me.component';



const routes: Routes = [
  { 
    path : "", 
    component : AboutMeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
