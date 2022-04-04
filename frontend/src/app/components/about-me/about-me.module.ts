import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutMeComponent } from "./global/about-me.component";
import { InfoProfilComponent } from "./info-profil/info-profil.component";
import { LinksComponent } from "./links/links.component";
import { ProfilComponent } from "./profil/profil.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { CompetenceComponent } from './competence/competence.component';
import { AboutMeRoutingModule } from "./about-me.routing";
import { TranslateModule } from "@ngx-translate/core";
import { PipesModule } from "src/app/pipes/pipes.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AboutMeComponent,
    LinksComponent,
    ProfilComponent,
    InfoProfilComponent,
    ProgressBarComponent,
    CompetenceComponent    
    
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AboutMeRoutingModule,
    PipesModule,
    FormsModule
  ]
})
export class AboutMeModule { }