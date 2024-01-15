import { AfterViewInit, Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
 
@Component({
  selector: 'app-horizontal-calendar',
  templateUrl: './horizontal-calendar.component.html',
  styleUrls: ['./horizontal-calendar.component.css']
})
export class HorizontalCalendarComponent implements OnInit, AfterViewInit {
  constructor(private modalService: NgbModal) { }
  names: string[] = ['John', 'Jane', 'Doe', 'Alice', 'Bob'];
  
  ngAfterViewInit(): void {
   
  }
  // day: any;
  // currentDate: Date = new Date();
  // calendar: any[][] = [];
  // next30Days: Date[] = [];
 
  // ngOnInit(): void {
  //   this.generateCalendar();
  //   this.generateNext30Days();
  // }
 
  // ngAfterViewInit(): void {
  //   // Add any additional initialization logic after the view is initialized
  // }
 
  // getCurrentMonth(): string {
  //   return formatDate(this.currentDate, 'MMMM yyyy', 'en-US');
  // }
 
  // generateCalendar(): void {
  //   const year = this.currentDate.getFullYear();
  //   const month = this.currentDate.getMonth();
 
  //   const firstDayOfMonth = new Date(year, month, 1);
  //   const lastDayOfMonth = new Date(year, month + 1, 0);
 
  //   const daysInMonth = lastDayOfMonth.getDate();
  //   const firstDayOfWeek = firstDayOfMonth.getDay();
 
  //   let dayCounter = 1
  //   this.calendar = [];
 
  //   for (let i = 0; i < 6; i++) {
  //     const week: any[] = [];
 
  //     for (let j = 0; j < 7; j++) {
  //       if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
  //         week.push(null);
  //       } else {
  //         const date = new Date(year, month, dayCounter);
  //         week.push(date);
  //         dayCounter++;
  //       }
  //     }
 
  //     this.calendar.push(week);
  //   }
  // }
 
  // generateNext30Days(): void {
  //   const today = new Date();
  //   this.next30Days = [];
 
  //   for (let i = 1; i <= 30; i++) {
  //     const nextDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
  //     this.next30Days.push(nextDay);
  //   }
  // }
 
  // prevMonth(): void {
  //   this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  //   this.generateCalendar();
  // }
 
  // nextMonth(): void {
  //   this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  //   this.generateCalendar();
  // }
  dayNamesStartingFromMonday(): string[] {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
 
    // Rotate the daysOfWeek array to start from Monday
   
 
    return daysOfWeek;
  }
 
  // dayClicked(date: Date | null): void {
  //   if (date) {
  //     // Implement your logic for handling a day click
  //     console.log('Clicked on:', date.toDateString());
  //   }
  // }
 
  // openPopup(date: Date) {
  //   const modalRef = this.modalService.open(DatePickerComponent);
  //   modalRef.componentInstance.selectedDate = date;
  // }
 
  // dayNamesStartingFromCurrentDay(): string[] {
  //   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  //   const currentDayIndex = new Date().getDay();
 
  //   const rotatedDaysOfWeek = [...daysOfWeek.slice(currentDayIndex), ...daysOfWeek.slice(0, currentDayIndex)];
 
  //   return rotatedDaysOfWeek;
  // }
 
 
getCurrentMonth() {
  return formatDate(this.currentDate, 'MMMM yyyy', 'en-US');
}
day: any;
currentDate: Date = new Date();
  calendar: any[][] = [];
 
  ngOnInit(): void {
    this.generateCalendar();
  }
 
  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
 
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
 
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
 
    let dayCounter = 1;
    this.calendar = [];
 
    for (let i = 1; i < 6; i++) {
      const week: any[] = [];
 
      for (let j = 0; j <7; j++) {
        if ((i === 0 && j <firstDayOfWeek) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          const date = new Date(year, month, dayCounter);
          week.push(date);
          if(dayCounter<daysInMonth) dayCounter++;
          else break;
        }
      }
     
 
     this.calendar.push(week);
     
    }
  }
  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }
 
  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }
 
  // dayClicked(day: Date | null): void {
  //   if (day) {
  //     // Implement your logic for handling a day click
  //     console.log('Clicked on:', day.toDateString());
  //   }
  // }
 
  dayClicked(date: Date) {
    if (date) {
      this.openPopup(date);
    }
  }
 
 
 
  openPopup(date: Date) {
    const modalRef = this.modalService.open(LeaveFormComponent);
    modalRef.componentInstance.selectedDate = date;
  }
 
}