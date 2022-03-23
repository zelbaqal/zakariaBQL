import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfilComponent } from '../edit-profil/edit-profil.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  { 
    path : "", 
    component : EditProfilComponent//AboutMeComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfilRoutingModule { }