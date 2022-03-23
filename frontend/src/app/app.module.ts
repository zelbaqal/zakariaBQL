import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroModule } from './components/intro/intro.module';
import { ExperienceModule } from './components/experience/experience.module';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { InputModalComponent } from './components/modals/input-modal/input-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDragerComponent } from './components/modals/file-drager/file-drager.component';
import { CardModalComponent } from './components/modals/card-modal/card-modal.component';
import { ClickStopPropagation } from './directives/stopClickPropagation';
import { NetworkInterceptor } from './services/interceptors/network.interceptor';
import { LoginComponent } from './components/login/login.component';
import { PropertyExtractorPipe } from './pipes/property-extractor.pipe';







export function createTranslateLoader(httpClient : HttpClient){
  return new TranslateHttpLoader(httpClient, "./assets/i18n/",".json")
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClickStopPropagation,
    InfoModalComponent,
    InputModalComponent,
    FileDragerComponent,
    CardModalComponent,
    LoginComponent,
    PropertyExtractorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps : [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    IntroModule,
    ExperienceModule,
    NgxFileDropModule,
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
