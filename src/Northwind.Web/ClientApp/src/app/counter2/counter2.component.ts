import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css'],

})

export class Counter2Component implements OnInit {
  public currentCount = 0;
  public incNumber = 0;


  constructor() {

  }

  ngOnInit() {
  }

  public incrementCounter() {
    this.incNumber = (<HTMLInputElement>document.getElementById("incNumber")).valueAsNumber;
    (this.currentCount = (this.currentCount + this.incNumber))
  }
}