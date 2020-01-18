import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { PlayRoutingModule } from './play-routing.module';
import { PlayContainerComponent } from './containers/play-container/play-container.component';
import { StoreModule } from '@ngrx/store';
import { playFeatureKey, playReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlayEffects } from './effects';
import { PlayService } from './services/play.service';



@NgModule({
  declarations: [PlayContainerComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    MaterialModule,
    StoreModule.forFeature(playFeatureKey, playReducer),
    EffectsModule.forFeature([PlayEffects]),
  ],
  providers: [PlayService]
})
export class PlayModule { }
