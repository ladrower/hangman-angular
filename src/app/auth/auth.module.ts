import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';
import { AuthRoutingModule } from './auth-routing.module';
import { authFeatureKey, authReducer } from './reducers';
import { AuthEffects } from './effects';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';


@NgModule({
  declarations: [AuthContainerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
