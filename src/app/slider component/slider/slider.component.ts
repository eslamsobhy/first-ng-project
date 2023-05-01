import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];
  src = '0';

  interval: any = {};

  next() {
    this.src =
      parseInt(this.src) == this.images.length - 1
        ? `${this.images.length - 1}`
        : `${parseInt(this.src) + 1}`;
  }

  prev() {
    this.src = parseInt(this.src) == 0 ? '0' : `${parseInt(this.src) - 1}`;
  }

  repeat() {
    this.interval = setInterval(() => {
      this.src = ((parseInt(this.src) + 1) % this.images.length).toString();
    }, 1000);
  }

  clear() {
    clearInterval(this.interval);
  }
}
