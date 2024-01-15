import { Component } from '@angular/core';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-datepicker-return-focus-to-input',
  templateUrl: './date-picker.component.html'
})


export class DatePickerComponent {
  constructor(config: NgbDatepickerConfig) {
    // Custom configurations if needed
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: 2099, month: 12, day: 31 };
  }
  

}