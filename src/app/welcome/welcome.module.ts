import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { WelcomeContainerComponent } from './containers/welcome-container/welcome-container.component';

const Components = [
  WelcomeContainerComponent
];

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: Components
})
export class WelcomeModule { }
