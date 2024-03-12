import { Component } from '@angular/core';
import { AuthServices } from 'src/auth/auth.service';
import { AuthService as Auth0AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  loggedIn = false;
  
  constructor(public authService: AuthServices) {
    // this.authService.auth.user$.subscribe((user: any) =>{ 
    //   console.log('user',user);
    //   this.loggedIn = !!user;
    //   // console.log('this.loggedIN', this.loggedIns)
    // } );
    // this.authService.isAuthenticated.subscribe((data: any) => (this.loggedIn = !!data));
    
  
  
  // this.authService.auth.isAuthenticated$.subscribe((authenticated) => {

  //   console.log('authenticated',authenticated)
  //   if (authenticated) {
  //     // Update your service state or perform actions after successful login
  //     // this.authService.handleSuccessfulLogin();
  //   }
  // });
  console.log('this.authService',this.authService)
  // console.log('redirectUri',redirectUri);
  // console.log('loggedIn',this.loggedIn);

  // console.log('this.authService.auth.user$',this.authService.auth.isAuthenticated$.subscribe((data: any)=>{
  //   console.log('data', data)
  // })
  // );
  }

  getAuthService(): AuthServices {
    return this.authService;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
