import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCalendarComponent } from './Components/my-calendar/my-calendar.component';


const routes: Routes = [
  {path:'start',component:LandingPageComponent},
  { path: '', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
