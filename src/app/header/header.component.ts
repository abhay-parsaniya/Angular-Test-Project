import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerHeading = 'Test';

  navbarItems = ['Home', 'About', 'Services', 'Info', 'Contact us'];

  constructor() {}

  ngOnInit(): void {}
}
