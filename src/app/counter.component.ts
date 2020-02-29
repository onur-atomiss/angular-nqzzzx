import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  name = "";
  counter = 0;

  constructor() {
    this.counter++; //TODO: get incremented value from service
    this.name = "Onur";
  }

  getCount() {
    return this.counter;
  }

}