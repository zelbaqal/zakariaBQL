import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../token-storage/tokenStorage.service';
 
 
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
    constructor(private _router:Router, private tokenStorage: TokenStorageService ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (!this.tokenStorage.getToken())  {
            //alert('You are not allowed to view this page');
            //redirect to login/home page etc
            this._router.navigate(["/login"]);
            //return false to cancel the navigation
            return false;
        } 
        return true;
    }
 
}