import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedAnimations } from 'src/app/shared/animations';
import { localStorageAdapter } from 'src/app/shared/local-storage';
import { RulesDialogComponent } from '../components/rules-dialog/rules-dialog.component';
import { GameServiceService as GameService } from '../services/game-service.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss'],
  animations: [SharedAnimations],
})
export class GameContainerComponent implements OnInit {
  session: boolean;
  score: number;

  _result: {
    winner: string;
    playerSelection: string;
    computerSelection: string;
  };

  constructor(public gameService: GameService, public dialog: MatDialog) {
    this.session = true;
    this.score = 0;
  }

  ngOnInit(): void {
    this.getScore();
    console.info('Game Loaded!');
  }

  showModal() {
    const dialogRef = this.dialog.open(RulesDialogComponent, {
      height: '400px',
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  // Returns the current score first from the observable or fall back to local storage
  getScore() {
    this.score =
      this.gameService.currentScore ||
      localStorageAdapter.getItem('currentScore');
  }

  processResult(
    result: string,
    playerSelection: string,
    computerSelection: string
  ) {
    try {
      console.info('Getting Results!');

      //output scores to the DOM
      if (result === 'Player') {
        // incredent user score
        this.score++;

        // update score observable
        this.gameService.updateScore = this.score;
      } else if (result === 'Computer') {
        // decrement user score
        this.score > 0 ? this.score-- : null;

        // update score observable
        this.gameService.updateScore = this.score;
      }

      //Show result
      this.session = false;

      this._result = {
        winner: result,
        playerSelection: playerSelection,
        computerSelection: computerSelection,
      };
    } catch (error) {
      console.log(`Error occured at function process-result ${error}`);
    } finally {
      // Persist the score to local storage
      localStorageAdapter.setItem('currentScore', this.score);
    }
  }

  startGame(playerMove: string) {
    try {
      if (!playerMove) return;

      // result of game
      let result: 'Player' | 'Computer' | 'Draw';
      const computerSelection: string = this.gameService.computerMove();
      const playerSelection: string = playerMove;

      // Get the result the gaming session
      result = this.gameService.checkWinner(playerSelection, computerSelection);

      // Compute the result and display it
      this.processResult(result, playerSelection, computerSelection);
    } catch (error) {
      console.log(`Error occured at function start game ${error}`);
    }
  }

  restartGame() {
    console.info('Restarting Game!');
    this.session = true;
  }
}
