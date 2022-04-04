import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEditInfo } from 'src/app/components/edit-profil/partials/accountDetails/account-details.component';
import { UserHomeInfo } from 'src/app/models/userHomeInfo.model';
import { ConstantVariables } from '../ConstantVariables';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class PublicResourcesService {
  
  URL:string = `${ConstantVariables.DOMAIN}/api/public`;
  
  constructor(private http : HttpClient, private langageService : LanguageService) { }

    getGlobalInfoUser(): Observable<UserHomeInfo> {
        return this.http.get<UserHomeInfo>(this.URL)
    }

    getCvFile(userId:number): Observable<Blob> {
        const cvName = `cv-${userId}-${this.langageService.userLanguage}`;
        return this.http.get(`${this.URL}/${cvName}`,{responseType : 'blob'});
    }

    getUserToEdit():Observable<UserEditInfo>{
        return this.http.get(`${this.URL}/user`);
    }

    getColaboratorImage(name: string): Observable<any> {
        return this.http.get<any>(`${this.URL}/colaborators/${name}`);
      }
    
    getColaboratorsImages():Observable<any>{
        return this.http.get(`${this.URL}/colaborators`);
    }
 
}
