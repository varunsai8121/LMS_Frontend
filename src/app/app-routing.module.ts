import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MyCalendarComponent } from './Components/my-calendar/my-calendar.component';
import { LeaveFormComponent } from './Components/leave-form/leave-form.component';
import { ViewLeaveComponent } from './Components/view-leave/view-leave.component';
import { ManagerLandingComponent } from './Components/manager-landing/manager-landing.component';


const routes: Routes = [
  {
    path:'start',component:LandingPageComponent
  },
  {
    path: '', component:LoginComponent
  },
  {
    path:'mycalendar',component:MyCalendarComponent
  },
  {
    path:'leaveform',component:LeaveFormComponent
  },
  {
    path:'Openrequests',component:ViewLeaveComponent
  },
  {
    path:'mh',component:ManagerLandingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
