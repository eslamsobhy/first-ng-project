import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // studentObj: object = {};
  name = '';
  age = '';

  nameValid = true;

  ageValid = true;

  // create my event
  @Output() getEvent = new EventEmitter();

  add() {
    if (this.name && this.age && +this.age > 0) {
      this.getEvent.emit({ name: this.name, age: this.age }); //fire the event with the data
      this.nameValid = true;
      this.ageValid = true;
    } else if (!this.name) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
      this.ageValid = false;
    }
  }
}
