import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { PlayRoutingModule } from './play-routing.module';
import { PlayContainerComponent } from './containers/play-container/play-container.component';



@NgModule({
  declarations: [PlayContainerComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    MaterialModule
  ],
})
export class PlayModule { }
