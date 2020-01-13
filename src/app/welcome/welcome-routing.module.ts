import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeContainerComponent } from './containers/welcome-container/welcome-container.component';

const routes: Routes = [
  { path: '', component: WelcomeContainerComponent, data: { title: 'Welcome' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
