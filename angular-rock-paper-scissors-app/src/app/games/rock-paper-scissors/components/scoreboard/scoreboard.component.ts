import { Component, Input, OnInit } from '@angular/core';
import { localStorageAdapter } from 'src/app/shared/local-storage';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  @Input() score: number;

  constructor() {}

  ngOnInit(): void {}
}
