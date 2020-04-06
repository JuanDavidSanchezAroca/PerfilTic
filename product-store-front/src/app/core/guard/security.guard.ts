import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SecurityGuard implements CanActivate{

    constructor(private router:Router){}

    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(localStorage.getItem('user')){
            return true;
        }
        location.replace('/');
        return false;
    }
}