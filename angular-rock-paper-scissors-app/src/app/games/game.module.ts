import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module/material-module.module';
import { GameContainerRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [],
  imports: [GameContainerRoutingModule, CommonModule],
})
export class GameModule {}
