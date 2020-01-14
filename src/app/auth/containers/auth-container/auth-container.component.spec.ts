import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthContainerComponent } from './auth-container.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../../auth-routing.module';
import { MaterialModule } from '../../../material';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from '../../reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthContainerComponent', () => {
  let component: AuthContainerComponent;
  let fixture: ComponentFixture<AuthContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthContainerComponent ],
      imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        FormsModule,
        NoopAnimationsModule,
        StoreModule.forRoot({
          [authFeatureKey]: authReducer
        }),
      ],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
