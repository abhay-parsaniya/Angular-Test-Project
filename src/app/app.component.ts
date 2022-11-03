import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'test';
  public isDisplay: boolean = true;
  public cityName: string = '';

  changeVisibility() {
    this.isDisplay = !this.isDisplay;
    setTimeout(() => {
      this.isDisplay = !this.isDisplay;
    }, 2000);
  }

  setCityValue($event: any) {
    return (this.cityName = $event);
  }
}
