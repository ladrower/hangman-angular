import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeContainerComponent } from './welcome-container.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';
import { RouterModule } from '@angular/router';

describe('WelcomeContainerComponent', () => {
  let component: WelcomeContainerComponent;
  let fixture: ComponentFixture<WelcomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeContainerComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        RouterModule.forRoot(
          [
            { path: '', component: WelcomeContainerComponent}
          ]
        ),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
