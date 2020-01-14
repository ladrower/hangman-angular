import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocItemComponent } from './doc-item.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DocFormBuilder } from '../../services/doc-form.builder';

describe('DocItemComponent', () => {
  let component: DocItemComponent;
  let fixture: ComponentFixture<DocItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocItemComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [
        DocFormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocItemComponent);
    component = fixture.componentInstance;
    component.docForm = {
      form: new FormGroup({}),
      fields: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
