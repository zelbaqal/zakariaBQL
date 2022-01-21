import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  supportedLanguages : string[] = [];

  constructor(private languageService : LanguageService) { }

  ngOnInit(): void {
    this.supportedLanguages = this.languageService.getAvailibleLanguage();
  }

  getFlagCountry(lang : string){
    return lang === 'en' ?  'flag-icon-gb' : `flag-icon-${lang}`;
  }

  changeLang(lang : string){
    this.languageService.setLanguage(lang);
  }

}
