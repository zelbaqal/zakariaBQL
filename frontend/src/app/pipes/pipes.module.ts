import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagrapheLength, PropertyExtractorPipe } from './property-extractor.pipe';




@NgModule({
  declarations: [
    PropertyExtractorPipe,
    ParagrapheLength
   
  
  ],
  imports: [
    CommonModule
  ],
  exports:[PropertyExtractorPipe]
})
export class PipesModule { }
