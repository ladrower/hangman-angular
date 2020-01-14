import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreContainerComponent } from './core-container.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from '../../../auth/reducers';
import { Components } from '../../core.module';

describe('CoreContainerComponent', () => {
  let component: CoreContainerComponent;
  let fixture: ComponentFixture<CoreContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: Components,
      imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        NoopAnimationsModule,
        StoreModule.forRoot({
          [authFeatureKey]: authReducer
        }),
        RouterModule.forRoot(
          [
            { path: '', component: CoreContainerComponent}
          ]
        )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
