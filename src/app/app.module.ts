import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './core/effects';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreContainerComponent } from './core/containers/core-container/core-container.component';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    WelcomeModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    EffectsModule.forRoot([RouterEffects]),
    CoreModule
  ],
  bootstrap: [CoreContainerComponent]
})
export class AppModule { }
