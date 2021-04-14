import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
