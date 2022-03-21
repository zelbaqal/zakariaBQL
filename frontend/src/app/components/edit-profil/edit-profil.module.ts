import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { EditProfilComponent } from './edit-profil.component';

import { ImageLoaderComponent } from './partials/imgLoader/img-loader.components';
import { AccountDetailsComponent } from './partials/accountDetails/account-details.component';
import { GridColaborators } from './partials/gridColaborators/grid-colaborators.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgComponent } from './img-component';
import { EditProfilRoutingModule } from './edit-profil.routing';




@NgModule({
  declarations: [
    EditProfilComponent,
    ImageLoaderComponent,
    AccountDetailsComponent,
    GridColaborators,
    ImgComponent
  ],
  imports: [
    CommonModule,
    EditProfilRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([])
  ]
})
export class EditProfilModule { }
