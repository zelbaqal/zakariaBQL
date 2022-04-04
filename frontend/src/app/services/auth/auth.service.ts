import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserEditInfo } from "src/app/components/edit-profil/partials/accountDetails/account-details.component";
import { ConstantVariables } from "../ConstantVariables";
import { TokenStorageService } from "../token-storage/tokenStorage.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {

    private currentUserSubject: BehaviorSubject<UserEditInfo>;
    public currentUser: Observable<UserEditInfo>;
    
   
    constructor(private http: HttpClient, private tokenStorageService : TokenStorageService) {
        this.currentUserSubject = new BehaviorSubject<UserEditInfo>(tokenStorageService.getUser());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserEditInfo {
      return this.currentUserSubject.value;
    }
  
    login(credentials:any): Observable<any> {
        return this.http.post(ConstantVariables.DOMAIN + '/api/auth/signin', {
          username: credentials.email,
          password: credentials.password
        }, httpOptions);
      }

      logout() {
        // remove user from local storage to log user out
        this.tokenStorageService.clearTokenAndUser();
        this.currentUserSubject.next(null as any);
      }

      isAdmi():boolean{
        return this.currentUserSubject.value.roles?.indexOf('ROLE_ADMIN') !== -1;
      }

    
    
  }