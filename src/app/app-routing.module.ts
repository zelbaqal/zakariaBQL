import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/global/about-me.component';

import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  
  { path : "home", component : IntroComponent},
  { path : "about", component : AboutMeComponent},
   { path : "**", redirectTo : "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
