import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalExperienceComponent } from './global-experience/global-experience.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
     GlobalExperienceComponent,
     TimelineComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ExperienceModule { }
