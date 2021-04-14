import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scissors-button',
  templateUrl: './scissors-button.component.html',
  styleUrls: ['./scissors-button.component.scss'],
})
export class ScissorsButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  @Input() highlighted: boolean;
  
  constructor() {}

  ngOnInit(): void {}
}
