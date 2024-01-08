import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from '../date-picker/date-picker.component';




@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.css']
})
export class MyCalendarComponent {

  constructor(private modalService: NgbModal) { }


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

    for (let i = 0; i < 6; i++) {
      const week: any[] = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
          week.push(null);
        } else {
          const date = new Date(year, month, dayCounter);
          week.push(date);
          dayCounter++;
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
    const modalRef = this.modalService.open(DatePickerComponent);
    modalRef.componentInstance.selectedDate = date;
  }
  
}
