import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCalendarComponent } from './Components/my-calendar/my-calendar.component';
import { LeaveFormComponent } from './Components/leave-form/leave-form.component';


const routes: Routes = [
  {path:'start',component:LandingPageComponent},
  { path: '', component:LoginComponent},
  {path:'calendar',component:MyCalendarComponent},
  {
    path:'leaveform',component:LeaveFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
