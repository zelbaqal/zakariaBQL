import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UserEditInfo } from 'src/app/components/edit-profil/partials/accountDetails/account-details.component';
import { UserHomeInfo } from 'src/app/models/userHomeInfo.model';
import { ConstantVariables } from '../ConstantVariables';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  URL:string = `${ConstantVariables.DOMAIN}/api/userInfo/`;
  
  constructor(private http : HttpClient, private langageService : LanguageService) { }

   getGlobalInfoUser(userId: number): Observable<UserHomeInfo> {
    return this.http.get<any>(this.URL,{ params:{id : userId.toString()}})
  }

  getUserInfo():Observable<UserHomeInfo> {
    // const userLang = this.langageService.userLanguage;
    return this.http.get<UserHomeInfo>(this.URL);
  }

  updateUserHomeInformation(formData:FormData):Observable<UserHomeInfo>{
    return this.http.patch<UserHomeInfo>(`${this.URL}`, formData);
  }

   getCvFile(userId:number): Observable<Blob> {
     const cvName = `cv-${userId}-${this.langageService.userLanguage}`;
     return this.http.get(`${this.URL}${cvName}`,{responseType : 'blob'});
  }

  updateUserProfilInformation(formData:FormData):Observable<any>{
    return this.http.patch(`${this.URL}user`, formData, { responseType : 'text'});
  }
  getUserToEdit(id:number):Observable<any>{
    return this.http.get(`${this.URL}user/${id}`);
  }
 
}
