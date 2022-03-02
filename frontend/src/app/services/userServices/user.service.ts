import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ConstantVariables } from '../ConstantVariables';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  URL:string = `${ConstantVariables.DOMAIN}/api/userInfo/`;
  
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

   getCvFile(userId:number): Observable<Blob> {
     const cvName = userId + "-" + this.langageService.userLanguage;
     return this.http.get(`${this.URL}${cvName}`,{responseType : 'blob'});
  }
 
}
