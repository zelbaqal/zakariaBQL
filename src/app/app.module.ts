import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertyExtractorPipe } from './pipes/property-extractor.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroModule } from './components/intro/intro.module';
import { AboutMeModule } from './components/about-me/about-me.module';




export function createTranslateLoader(httpClient : HttpClient){
  return new TranslateHttpLoader(httpClient, "./assets/i18n/",".json")
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertyExtractorPipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps : [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    IntroModule,
    AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
