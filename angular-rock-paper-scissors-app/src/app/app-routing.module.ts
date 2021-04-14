import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // For now Lazy load the game module by default,
  {
    path: '',
    loadChildren: () => import('./games/game.module').then((m) => m.GameModule),
  },

  // We can extensively create other modules for our app to do something else.
  {
    path: 'games',
    loadChildren: () => import('./games/game.module').then((m) => m.GameModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
