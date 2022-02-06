import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LanguageService } from '../services/language/language.service';

@Pipe({ name: 'default$' })
export class Default$Langue implements PipeTransform {

  constructor(private langageService : LanguageService){}

  transform(
    value$: Observable<string> | undefined
  ): Observable<string> {
    return value$ ? value$ : of(this.langageService.userLanguage);
  }
} 
 