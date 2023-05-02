import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // studentObj: object = {};
  // myEvent = new EventEmitter();
  // name = '';
  // age = '';

  // add() {}

  @Input() name: string = ''; //receiving the data from parent
}
