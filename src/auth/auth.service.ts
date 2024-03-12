// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthServices {
  // isAuthenticatedSubject: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  
  constructor(public auth: AuthService, 
    private router: Router) {

    this.isAuthenticated$ = auth.isAuthenticated$;
    console.log('=========== AuthService auth =======',auth)

  }

  isAuthenticatedFunction$(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  login() {
    this.auth.loginWithRedirect({
      appState:{
        target:'/home'
      }
    });
  }

  logout() {
    // this.auth.logout({ returnTo: environment.CLIENT_ORIGIN_URL });
  }

  redirectToLogin() {
    this.router.navigate(['/']);
  }

}
