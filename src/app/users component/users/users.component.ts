import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnChanges {
  usersData: { name: string; email: string; age: number }[] = [];

  @Input() loginDataFromParent = {};

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['loginDataFromParent'].firstChange);
    if (!changes['loginDataFromParent'].firstChange) {
      this.usersData.push(changes['loginDataFromParent'].currentValue);
    }
  }
}
