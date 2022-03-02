import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutMeComponent } from "./global/about-me.component";
import { InfoProfilComponent } from "./info-profil/info-profil.component";
import { LinksComponent } from "./links/links.component";
import { ProfilComponent } from "./profil/profil.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { CompetenceComponent } from './competence/competence.component';
import { AboutMeRoutingModule } from "./about-me.routing";
import { ParagrapheLength } from "src/app/pipes/property-extractor.pipe";
import { EditProfilModule } from "../edit-profil/edit-profil.module";

@NgModule({
  declarations: [
    AboutMeComponent,
    LinksComponent,
    ProfilComponent,
    InfoProfilComponent,
    ProgressBarComponent,
    CompetenceComponent,
    ParagrapheLength
  ],
  imports: [
    CommonModule,
    EditProfilModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }