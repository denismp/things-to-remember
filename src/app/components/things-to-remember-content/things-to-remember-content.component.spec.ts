import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToRememberContentComponent } from './things-to-remember-content.component';

describe('ThingsToRememberContentComponent', () => {
  let component: ThingsToRememberContentComponent;
  let fixture: ComponentFixture<ThingsToRememberContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsToRememberContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingsToRememberContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
