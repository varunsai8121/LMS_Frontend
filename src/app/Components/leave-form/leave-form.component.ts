import { Component } from '@angular/core';
import { FormDetails } from 'src/app/models/FormDetails';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent {
  formData:FormDetails = {
    UserId:0,
    UserName: '',
    startDate: '',
    endDate: '',
    Reason: ''
  };

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    // Add logic to handle form submission, such as sending data to a server.
  }
}
