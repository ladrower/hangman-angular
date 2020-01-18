import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatGridListModule,
} from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatGridListModule,
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule {}
