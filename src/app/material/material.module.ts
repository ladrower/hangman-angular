import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
} from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule {}
