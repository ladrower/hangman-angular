import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { AuthRoutingModule } from './auth-routing.module';
import { authFeatureKey, authReducer, authMetaReducer } from './reducers';
import { AuthEffects } from './effects';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';


@NgModule({
  declarations: [AuthContainerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature(authFeatureKey, authReducer, {
      metaReducers: [authMetaReducer]
    }),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
