import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit {
  imgUrl =
    'https://media.monsterindia.com/career-advice/wp-content/uploads/2021/11/web-developer-interview-questions-and-answers.jpg';
  greetingMsg = 'Angular Developers';

  incrementLabel = 'Increment';
  decrementLabel = 'Decrement';

  count = 0;

  constructor() {}

  ngOnInit(): void {}

  saveClickHandler() {
    console.log('saveClickHandler', this.greetingMsg);
  }

  onIncrement() {
    this.count += 1;
  }

  onDecrement() {
    this.count -= 1;
  }
}
