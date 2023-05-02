import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  data = 'data from child!';

  // 1)define the event
  @Output() getEvent = new EventEmitter();

  // 2) when will the event fire?
  constructor() {
    setTimeout(() => {
      this.getEvent.emit(this.data);
    }, 2000);
  }
}
