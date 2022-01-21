import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutMeComponent } from "./global/about-me.component";
import { InfoProfilComponent } from "./info-profil/info-profil.component";
import { LinksComponent } from "./links/links.component";
import { ProfilComponent } from "./profil/profil.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    AboutMeComponent,
    LinksComponent,
    ProfilComponent,
    InfoProfilComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class AboutMeModule { }