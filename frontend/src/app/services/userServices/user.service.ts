import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UserEditInfo } from 'src/app/components/edit-profil/partials/accountDetails/account-details.component';
import { Link } from 'src/app/models/link.model';
import { UserHomeInfo } from 'src/app/models/userHomeInfo.model';
import { ConstantVariables } from '../ConstantVariables';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  URL:string = `${ConstantVariables.DOMAIN}/api/userInfo`;
  
  constructor(private http : HttpClient) { }

  
  updateUserHomeInformation(formData:FormData):Observable<UserHomeInfo>{
    return this.http.patch<UserHomeInfo>(`${this.URL}`, formData);
  }


  updateUserProfilInformation(formData:FormData):Observable<any>{
    return this.http.patch(`${this.URL}/user`, formData, { responseType : 'text'});
  }

  updateThisLinkInfo(formData:FormData):Observable<Link>{
    return this.http.patch<Link>(`${this.URL}/links`, formData);
  }

 
}
