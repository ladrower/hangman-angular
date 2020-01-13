import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './interceptors/mock.interceptor';
import { CoreContainerComponent } from './containers/core-container/core-container.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const Components = [
  CoreContainerComponent,
  LayoutComponent
];


@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: Components,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
