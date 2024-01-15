import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCalendarComponent } from './Components/my-calendar/my-calendar.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { LoginComponent } from './Components/login/login.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
// import { AccountService } from './_services/account.service';
import { MatButtonModule } from '@angular/material/button';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HorizontalCalendarComponent } from './Components/horizontal-calendar/horizontal-calendar.component';
import { LeaveFormComponent } from './Components/leave-form/leave-form.component';
import { PopupComponent } from './Components/popup/popup.component';
import { ViewLeaveComponent } from './Components/view-leave/view-leave.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    MyCalendarComponent,
    HorizontalCalendarComponent,
    LeaveFormComponent,
    PopupComponent,
    ViewLeaveComponent,
 
    


   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    DatePickerModule,
    TimePickerModule,
    TooltipModule.forRoot(),
    DateRangePickerModule,
    DateTimePickerModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
  //  DatePickerModule.forRoot(),
    MatDialogModule,
    MatButtonModule,


  ],
  providers: [
    // AccountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
