// src/app/auth/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServices } from './auth.service';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServices,
     private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
  
    return this.authService.isAuthenticated$.pipe(
        tap((authenticated) => {
          if (!authenticated) {
            this.authService.redirectToLogin();
          }else{
            true
          }
        })
      );
    }
}
