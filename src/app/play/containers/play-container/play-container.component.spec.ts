import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayContainerComponent } from './play-container.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';
import { StoreModule } from '@ngrx/store';
import { playFeatureKey, playReducer } from '../../reducers';
import { PlayService } from '../../services/play.service';

describe('PlayContainerComponent', () => {
  let component: PlayContainerComponent;
  let fixture: ComponentFixture<PlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayContainerComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        StoreModule.forRoot({
          [playFeatureKey]: playReducer
        }),
      ],
      providers: [
        PlayService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
