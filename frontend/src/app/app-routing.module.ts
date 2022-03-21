import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalExperienceComponent } from './components/experience/global-experience/global-experience.component';

import { IntroComponent } from './components/intro/intro.component';


const routes: Routes = [
  
  { path : "home", component : IntroComponent},
  { path : "about", loadChildren: ()=> import('./components/about-me/about-me.module').then(mod => mod.AboutMeModule)},
  { path : "edit-profil", loadChildren: ()=> import('./components/edit-profil/edit-profil.module').then(mod => mod.EditProfilModule)},
  { path : "experience", component : GlobalExperienceComponent},

   { path : "**", redirectTo : "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
