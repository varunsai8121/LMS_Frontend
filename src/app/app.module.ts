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

import { AccountService } from './_services/account.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    MyCalendarComponent,
    


   


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
  //  DatePickerModule.forRoot(),

  ],
  providers: [
    AccountService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
