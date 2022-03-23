import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserEditInfo } from "src/app/components/edit-profil/partials/accountDetails/account-details.component";
import { ConstantVariables } from "../ConstantVariables";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    
   
    constructor(private http: HttpClient) {}
  
    login(credentials:any): Observable<any> {
        return this.http.post(ConstantVariables.DOMAIN + '/api/auth/signin', {
          username: credentials.email,
          password: credentials.password
        }, httpOptions);
      }
    register(user:UserEditInfo): Observable<any> {
    return this.http.post(ConstantVariables.DOMAIN + '/api/auth/signup', {
        email: user.email,
        //password: user.password
    }, httpOptions);
    }
    
  }