import { Component } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css'],
})
export class InputBindingComponent {
  name = '';

  changeText(e: any) {
    this.name = e.target.value;
  }

  clear() {
    this.name = '';
  }
}
