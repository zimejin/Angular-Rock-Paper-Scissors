import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() result: {
    winner: string;
    playerSelection: string;
    computerSelection: string;
  };

  @Output() playAgain = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
