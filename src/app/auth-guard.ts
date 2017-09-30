import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate> {
    constructor(private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {
        if(sessionStorage.getItem("login") === null) {
            this._router.navigate(['/login']);
        } else {
            return true;
        }
    }
 
    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate(): true;
    }   

}
