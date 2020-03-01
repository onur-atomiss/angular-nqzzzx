import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() title: string;
  counter = 0; // it shouldn't be static or component reloads increment the counter.
               // doesn't matter when a proper service is used for counting.
     
  constructor() {
    this.counter++; //TODO: get last or incremented value from a counter service by                  //sending a browser fingerprint, user name, cookie etc.
                    //we can use different services for different counting purposes
                    //like currently online users, current anonymous visitors, total
                    //site visits etc.
  }

  getTitle() {
    return this.title;
  }

  getCount() {
    return this.counter; //service isn't being called here to reduce service calls.
  }

}