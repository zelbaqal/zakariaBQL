import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { EditProfilComponent } from './edit-profil.component';
import { ImgComponent } from './img-component';



@NgModule({
  declarations: [
    EditProfilComponent,
    ImgComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      ImgComponent
    ])
  ]
})
export class EditProfilModule { }
