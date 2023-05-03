import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = '';
  email = '';
  age = '';

  @Output() dataEvent = new EventEmitter();

  join() {
    // console.log(this.name, this.email, this.age);
    let data = { name: this.name, email: this.email, age: this.age };
    this.dataEvent.emit(data);

    // clear the input fields
    this.name = '';
    this.email = '';
    this.age = '';
  }
}
