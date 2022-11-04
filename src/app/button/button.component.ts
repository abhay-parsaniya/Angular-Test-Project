import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string | undefined;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (this.label === 'Increment') {
      this.increment.emit();
    } else {
      this.decrement.emit();
    }
  }
}
