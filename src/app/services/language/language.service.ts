import { EventEmitter, Injectable, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageKey : string = 'userLanguage';
  private _userLanguage : string = 'en';
  private supportedLanguage : string[] = ['fr','en'];
  @Output() langChenged = new EventEmitter<string>();

  constructor( 
      private translate : TranslateService 
    ) { 
      this.initLanguage();
      this.translate.use(this._userLanguage);
  }

  initLanguage(){
    const key = localStorage.getItem(this.languageKey);
    if(key){
      this._userLanguage = key;
    }else{
      //get browser language
      const browserLanguage = navigator.language.split('-')[0];  //'fr-FR' ==> need split to get just 'fr'
     
      if(this.supportedLanguage.includes(browserLanguage)){
        this._userLanguage = browserLanguage;
        localStorage.setItem(this.languageKey, browserLanguage);
      }
    }
  }

  setLanguage(lang:string){
    this._userLanguage = lang;
     localStorage.setItem(this.languageKey, this._userLanguage);
     this.translate.use(this._userLanguage);
     this.langChenged.emit(lang);
  }

  get userLanguage(){
    return this._userLanguage;
  }

  getAvailibleLanguage(){
    return this.supportedLanguage;
  }
}
