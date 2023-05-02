import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  data = 'data from child!';
  @Input() studentsData: { name: string; age: number }[] = [];
}
