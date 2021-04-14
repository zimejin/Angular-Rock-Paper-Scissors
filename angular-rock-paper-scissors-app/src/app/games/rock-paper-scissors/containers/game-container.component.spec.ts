import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material-module/material-module.module';
import { localStorageAdapter } from 'src/app/shared/local-storage';
import { PaperButtonComponent } from '../components/action-buttons/paper-button/paper-button.component';
import { RockButtonComponent } from '../components/action-buttons/rock-button/rock-button.component';
import { ScissorsButtonComponent } from '../components/action-buttons/scissors-button/scissors-button.component';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { RulesDialogComponent } from '../components/rules-dialog/rules-dialog.component';
import { RulesComponent } from '../components/rules/rules.component';
import { ScoreboardComponent } from '../components/scoreboard/scoreboard.component';
import { GameServiceService } from '../services/game-service.service';

import { GameContainerComponent } from './game-container.component';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule, BrowserAnimationsModule, MaterialModule],
      declarations: [
        GameContainerComponent,
        ScoreboardComponent,
        RulesDialogComponent,
        RulesComponent,
        GameBoardComponent,
        PaperButtonComponent,
        ScissorsButtonComponent,
        RockButtonComponent,
      ],
      providers: [GameServiceService, MatDialog],
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [RulesDialogComponent],
      },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should display the rules modal when rules button is clicked', async (done) => {
    spyOn(component, 'showModal').and.callThrough();

    const button = document.getElementById('rules-btn');

    button.click();

    const modal = document.querySelector('mat-dialog-container');

    // Expect show modal function is called when the rules button is clicked
    expect(component.showModal).toHaveBeenCalled();

    // Expect the modal to pop-up in the interface
    expect(modal).toBeTruthy();

    done();
  });

  it('it should display 3 buttons on the screen for rock, paper, and scissors', () => {
    const paper = document.querySelector('app-paper-button');
    const rock = document.querySelector('app-rock-button');
    const scissors = document.querySelector('app-scissors-button');

    // Expect that the elements are visible on the screen
    expect(scissors).toBeTruthy();
    expect(paper).toBeTruthy();
    expect(rock).toBeTruthy();
  });

  it('it should display the game score on the screen', async (done) => {
    // Get the element from the dom
    const score = document.querySelector('app-scoreboard');

    // Expect that it is visible
    expect(score).toBeTruthy();

    done();
  });

  it('it should start a new game when the player makes a move', () => {
    spyOn(component, 'startGame').and.callThrough();

    const button = document.getElementsByClassName(
      'action-buttons'
    )[0] as HTMLElement;

    button.click();

    // Expect the start game function to be called when the user makes a move
    expect(component.startGame).toHaveBeenCalled();

    // Expect the result to be displayed and session to be false
    expect(component.session).toBe(false);
  });

  it('it should compute the result of the game and save the score to local storage', async (done) => {
    spyOn(component, 'startGame').and.callThrough();

    // Select a button, in for this test paper
    const button = document.getElementsByClassName(
      'action-buttons'
    )[0] as HTMLElement;

    let result: any;
    let score: any;

    expect(component.session).toBe(true);

    // Click the selected button
    button.click();

    // using setTimeout(..., 0) will basically make your code run after the current event loop
    setTimeout(() => {
      // Expect the session to be false
      expect(component.session).toBe(false);

      result = document.querySelector('app-result');

      console.log(result);

      // Expect the result of the match o be defined
      expect(component._result).toBeDefined();

      score = localStorageAdapter.getItem('currentScore');

      expect(score).toBeDefined();

      expect(component.startGame).toHaveBeenCalled();

      done();
    }, 0);
  });

  it('it should increment the score when the player wins', () => {
    component.score = 0;

    const computerSelection = 'Rock';
    const playerSelection = 'Paper';

    // result of game, player wins because paper beats rock
    let result = component.gameService.checkWinner(
      playerSelection,
      computerSelection
    );

    component.processResult(result, playerSelection, computerSelection);

    expect(component.score).toBe(1);
  });

  it('it should decrement the score when Computer wins', () => {
    component.score = 2;

    const computerSelection = 'Rock';
    const playerSelection = 'Scissors';

    // Computer wins, rock beats scissors
    let result = component.gameService.checkWinner(
      playerSelection,
      computerSelection
    );

    component.processResult(result, playerSelection, computerSelection);

    expect(component.score).toBe(1);
  });
});
