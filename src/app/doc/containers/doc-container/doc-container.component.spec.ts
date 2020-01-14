import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocContainerComponent } from './doc-container.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DocFormBuilder } from '../../services/doc-form.builder';
import { StoreModule } from '@ngrx/store';
import { docFeatureKey, docReducer } from '../../reducers';
import { DocItemComponent } from '../../components/doc-item/doc-item.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DocContainerComponent', () => {
  let component: DocContainerComponent;
  let fixture: ComponentFixture<DocContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocContainerComponent, DocItemComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        StoreModule.forRoot({
          [docFeatureKey]: docReducer
        }),
      ],
      providers: [
        DocFormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
