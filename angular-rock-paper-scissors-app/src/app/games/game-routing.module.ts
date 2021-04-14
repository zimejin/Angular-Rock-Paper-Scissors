import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // For now this is the entry module because we only have one game,
  // We can create an page for users to select which game to play, but it's out of scope
  {
    path: '',
    loadChildren: () =>
      import(
        './rock-paper-scissors/game-module/rock-paper-scissors.module'
      ).then((m) => m.RockPaperScissorsModule),
  },

  // Extensively add more games
  {
    path: 'play-rock-paper-scissors',
    loadChildren: () =>
      import(
        './rock-paper-scissors/game-module/rock-paper-scissors.module'
      ).then((m) => m.RockPaperScissorsModule),
  },

  // Rock, Paper, Scissors, Lizard, Spock
  {
    path: 'play-rock-paper-scissors-lizard-spock',
    loadChildren: 'Import Game Module',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameContainerRoutingModule {}
