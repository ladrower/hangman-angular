import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards';
import {WelcomeContainerComponent} from './welcome/containers/welcome-container/welcome-container.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeContainerComponent, data: { title: 'Welcome' }},
  // {
  //   path: 'play',
  //   loadChildren: () => import('./play/play.module').then(m => m.PlayModule),
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'doc',
    loadChildren: () => import('./doc/doc.module').then(m => m.DocModule),
  },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
