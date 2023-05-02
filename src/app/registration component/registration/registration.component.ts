import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // studentObj: object = {};
  name = '';
  age = '';

  add() {
    console.log(this.name, this.age);
  }
}
