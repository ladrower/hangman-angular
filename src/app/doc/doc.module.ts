import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';
import { DocContainerComponent } from './containers/doc-container/doc-container.component';
import { DocRoutingModule } from './doc-routing.module';
import { docFeatureKey, docReducer } from './reducers';
import { DocItemComponent } from './components/doc-item/doc-item.component';
import { DocFormBuilder } from './services/doc-form.builder';
import {DocEffects} from './effects';
import { DocApiService } from './services/doc-api.service';



@NgModule({
  declarations: [DocContainerComponent, DocItemComponent],
  imports: [
    CommonModule,
    DocRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(docFeatureKey, docReducer),
    EffectsModule.forFeature([DocEffects]),
  ],
  providers: [DocFormBuilder, DocApiService]
})
export class DocModule { }
