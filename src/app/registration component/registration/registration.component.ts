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

  // create my event
  @Output() getEvent = new EventEmitter();

  add() {
    this.getEvent.emit({ name: this.name, age: this.age }); //fire the event with the data
  }
}
