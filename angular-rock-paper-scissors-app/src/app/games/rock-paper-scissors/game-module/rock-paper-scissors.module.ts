import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperButtonComponent } from '../components/action-buttons/paper-button/paper-button.component';
import { RockButtonComponent } from '../components/action-buttons/rock-button/rock-button.component';
import { ScissorsButtonComponent } from '../components/action-buttons/scissors-button/scissors-button.component';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { ResultComponent } from '../components/result/result.component';
import { RulesDialogComponent } from '../components/rules-dialog/rules-dialog.component';
import { RulesComponent } from '../components/rules/rules.component';
import { ScoreboardComponent } from '../components/scoreboard/scoreboard.component';
import { GameContainerComponent } from '../containers/game-container.component';
import { MaterialModule } from 'src/app/material-module/material-module.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GameContainerComponent,
  },
];

@NgModule({
  entryComponents: [RulesDialogComponent],
  declarations: [
    ScoreboardComponent,
    ResultComponent,
    GameBoardComponent,
    GameContainerComponent,
    RulesComponent,
    PaperButtonComponent,
    ScissorsButtonComponent,
    RockButtonComponent,
    RulesDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockPaperScissorsModule {}
