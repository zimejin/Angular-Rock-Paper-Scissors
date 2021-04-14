import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameServiceService {
  // Create an observable to keep track of the score
  private scoreSrc$ = new BehaviorSubject(0);

  // Scores observable
  private scoreObserver$ = this.scoreSrc$.asObservable();

  constructor() {}

  // Helper functions to update the score
  set updateScore(score: number) {
    this.scoreSrc$.next(score);
  }

  // And get the current score
  get currentScore() {
    return this.scoreSrc$.value;
  }

  // Compute the computers move
  computerMove() {
    let result: string;
    let computerSelection = Math.random();

    if (computerSelection < 0.34) {
      result = 'Rock';
    }

    if (computerSelection <= 0.67) {
      result = 'Paper';
    } else {
      result = 'Scissors';
    }

    return result;
  }

  // Check the winner of the game
  checkWinner(pl: string, co: string) {
    if (pl === co) {
      return 'Draw';
    }
    if (pl === 'Rock') {
      if (co === 'Paper') {
        return 'Computer';
      } else {
        return 'Player';
      }
    }
    if (pl === 'Paper') {
      if (co === 'Scissors') {
        return 'Computer';
      } else {
        return 'Player';
      }
    }
    if (pl === 'Scissors') {
      if (co === 'Rock') {
        return 'Computer';
      } else {
        return 'Player';
      }
    }
  }
}
