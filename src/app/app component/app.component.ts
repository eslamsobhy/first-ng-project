import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-ng-project';
  students: { name: string; age: number }[] = [];

  getData(data: { name: string; age: number }) {
    // if (data.name && data.age) {
    //   this.students.push(data);
    // }
    this.students.push(data);
  }
}
