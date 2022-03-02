import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { EditProfilComponent } from './edit-profil.component';



@NgModule({
  declarations: [
    EditProfilComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class EditProfilModule { }
