import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalExperienceComponent } from './components/experience/global-experience/global-experience.component';

import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { PipesModule } from './pipes/pipes.module';
import { AuthGuardService } from './services/auth/authGuard.service';


const routes: Routes = [
  
  { path : "home", component : IntroComponent},
  { path : "about", loadChildren: ()=> import('./components/about-me/about-me.module').then(mod => mod.AboutMeModule)},
  { path : "admin", loadChildren: ()=> import('./components/edit-profil/edit-profil.module').then(mod => mod.EditProfilModule), canActivate : [AuthGuardService]},
  { path : "experience", component : GlobalExperienceComponent},
  { path : "login", component : LoginComponent},

   { path : "**", redirectTo : "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
