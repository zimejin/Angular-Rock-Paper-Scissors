import { TestBed } from '@angular/core/testing';

import { GameServiceService } from './game-service.service';

describe('GameServiceService', () => {
  let service: GameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameServiceService);
  });

  it('should be created', () => {
    // Expect that the service is created
    expect(service).toBeTruthy();
  });

  it('It should the currentScore function to return the current score from the observable', () => {
    expect(service.currentScore).toBeDefined();
  });

  it('The check winner function should expect that Rock will always beat Scissors', () => {
    const computerSelection = 'Rock';
    const playerSelection = 'Scissors';

    // Computer wins, rock beats scissors
    let result = service.checkWinner(playerSelection, computerSelection);

    // Expect Computer wins because Rock > Scissors
    expect(result).toEqual('Computer');
  });

  it('The check winner function should expect that Paper will always beat Rock', () => {
    const computerSelection = 'Paper';
    const playerSelection = 'Rock';
    const result = service.checkWinner(playerSelection, computerSelection);

    // Expect Computer wins because Paper beats rock
    expect(result).toEqual('Computer');
  });

  it('The check winner function should expect that Scissors will always beat Paper', () => {
    const computerSelection = 'Scissors';
    const playerSelection = 'Paper';

    // Computer wins, Scissors beats Paper
    let result = service.checkWinner(playerSelection, computerSelection);

    // Expect Computer wins because Scissors beats Paper
    expect(result).toEqual('Computer');
  });
});
