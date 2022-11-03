import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cities } from './select-city';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
})
export class SelectCityComponent implements OnInit {
  @Output() onSelect = new EventEmitter<string>();

  public selectedCity: string = '';
  public cities: Cities[] = [
    {
      label: 'Ahmedabad',
      value: 'Ahmedabad',
    },
    {
      label: 'Rajkot',
      value: 'Rajkot',
    },
    {
      label: 'Vadodara',
      value: 'Vadodara',
    },
    {
      label: 'Surat',
      value: 'Surat',
    },
    {
      label: 'Vapi',
      value: 'Vapi',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  change(e: any): void {
    this.selectedCity = e.target.value;
    this.onSelect.emit(this.selectedCity);
    return;
  }
}
