import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // name = '';
  // email = '';
  // age = '';

  get nameExists() {
    return this.myValidations.controls.name.value;
  }
  get emailExists() {
    return this.myValidations.controls.email.value;
  }
  get ageExists() {
    return this.myValidations.controls.age.value;
  }

  get validName() {
    return this.myValidations.controls.name.valid;
  }
  get validEmail() {
    return this.myValidations.controls.email.valid;
  }
  get validAge() {
    return this.myValidations.controls.age.valid;
  }

  myValidations = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9 ]*$'),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9][0-9]d*$'),
      Validators.min(18),
      Validators.max(45),
    ]),
  });

  @Output() dataEvent = new EventEmitter();

  join() {
    // console.log(this.name, this.email, this.age);
    // console.log(this.myValidations.valid);

    if (this.myValidations.valid) {
      let data = this.myValidations.value;
      this.dataEvent.emit(data);

      // clearing the input fields
      this.myValidations.controls.name.setValue('');
      this.myValidations.controls.email.setValue('');
      this.myValidations.controls.age.setValue('');
    }

    // clear the input fields
    // this.name = '';
    // this.email = '';
    // this.age = '';
  }
}
