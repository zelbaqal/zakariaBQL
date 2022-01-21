import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeLogoComponent } from './creative-logo/creative-logo.component';
import { DescriptionComponent } from './description/description.component';
import { IntroComponent } from './intro.component';
import { ColaboratorComponent } from '../colaborators/colaborator/colaborator.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from 'src/app/services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    IntroComponent,
    ColaboratorComponent,
    DescriptionComponent,
    CreativeLogoComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class IntroModule { }
