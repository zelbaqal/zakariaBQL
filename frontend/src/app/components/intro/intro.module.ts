import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeLogoComponent } from './creative-logo/creative-logo.component';
import { DescriptionComponent } from './description/description.component';
import { IntroComponent } from './intro.component';
import { ColaboratorComponent } from '../colaborators/colaborator/colaborator.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDatepickerModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Default$Langue } from 'src/app/pipes/default-lang';
import { ColaboratorsComponent } from '../colaborators/colaborators.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    IntroComponent,
    ColaboratorComponent,
    ColaboratorsComponent,
    DescriptionComponent,
    CreativeLogoComponent,
    Default$Langue
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgbModule,
    NgbModalModule,
    NgbDatepickerModule,
  ]
})
export class IntroModule { }
