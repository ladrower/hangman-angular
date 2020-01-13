import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayContainerComponent } from './containers/play-container/play-container.component';

const routes: Routes = [
  { path: '', component: PlayContainerComponent, data: { title: 'Play' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayRoutingModule {}
