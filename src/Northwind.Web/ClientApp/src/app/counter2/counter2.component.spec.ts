import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter2Component } from './counter2.component';

describe('Counter2Component', () => {
  let component: Counter2Component;
  let fixture: ComponentFixture<Counter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter2');
  }));

  it('should start with count 0, then increments by 5 when clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('button');
    oninput.apply("5");
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('5');
  }));
});

