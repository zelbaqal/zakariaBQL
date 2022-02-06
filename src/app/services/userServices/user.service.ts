import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  
  URL:string = "http://localhost:8080/api/userInfo/";
  
  constructor(private http : HttpClient, private langageService : LanguageService) { }

   getGlobalInfoUser(userId: number): Observable<User> {
    return this.http.get<any>(this.URL,{ params:{id : userId.toString()}})
  }

  getUserInfo():Observable<User> {
    // const userLang = this.langageService.userLanguage;
    return this.http.get<User>(this.URL);
  }


  updateUserInformation(formData:FormData):Observable<User>{
    return this.http.patch<User>(`${this.URL}`, formData);
  }
}
