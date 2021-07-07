import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {
  public currentCount = 0;
  public addCount = 0;

  public increment = 0;

  constructor() { }

  ngOnInit() {
  }

  public addCounter() {
    this.addCount++;
  }
  public minusCounter() {
    this.addCount--;
  }

  public incrementCounter() {
    (this.currentCount = (this.currentCount + this.addCount))
  }
}