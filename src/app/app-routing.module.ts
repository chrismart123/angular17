import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { AuthGuard } from 'src/auth/auth.guard';
// import { AuthGuard } from './auth/auth.guard.ts';

const routes: Routes = [
  { path: '', redirectTo:'/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent },
  { path: 'home', component: HomePageComponent, },
  { path: '**', component: LandingPageComponent  },
];

// canActivate: [AuthGuard] 
@NgModule({
  declarations:[
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
