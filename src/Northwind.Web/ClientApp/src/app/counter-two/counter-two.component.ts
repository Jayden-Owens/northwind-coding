import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrls: ['./counter-two.component.css']
})
export class CounterTwoComponent implements OnInit {
  public currentCount = 0;
  private increment = 2;

  constructor() { }

  ngOnInit() {
  }

  public incrementCounter() {
     (this.currentCount = (this.currentCount + this.increment))
  }
}
