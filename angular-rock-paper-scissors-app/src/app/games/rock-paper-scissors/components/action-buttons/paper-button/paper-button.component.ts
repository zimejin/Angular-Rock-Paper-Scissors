import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paper-button',
  templateUrl: './paper-button.component.html',
  styleUrls: ['./paper-button.component.scss'],
})
export class PaperButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();
  @Input() highlighted: boolean;

  constructor() {}

  ngOnInit(): void {}
}
