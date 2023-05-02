import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-ng-project';
  parentName = 'App';

  dataFromChild = '';

  getData(data: any) {
    this.dataFromChild = data;
  }
}
