import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rock-button',
  templateUrl: './rock-button.component.html',
  styleUrls: ['./rock-button.component.scss'],
})
export class RockButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  @Input() highlighted: boolean;

  constructor() {}

  ngOnInit(): void {}
}
