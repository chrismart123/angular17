import { Component } from '@angular/core';
import { AuthServices } from 'src/auth/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth-demo';
  loggedIn = true;
    
  constructor(public authService: AuthServices,
    private router: Router) {

      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            console.log('this.router.url', this.router.url);
            this.loggedIn = true;
            if(this.router.url==='/landing'){
              this.loggedIn = false;
            }
          }
        }
      );
  }

  ngOnInit() {

  
  }

  getAuthService(): AuthServices {
    return this.authService;
  }

 
  logout() {
    this.authService.logout();
  }
}
