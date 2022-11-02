import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  isDisplay = true;

  changeVisibility() {
    this.isDisplay = !this.isDisplay;
    setTimeout(() => {
      this.isDisplay = !this.isDisplay;
    }, 2000);
  }
}
