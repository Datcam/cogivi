import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeGratitudeComponent } from './contribute-gratitude.component';

describe('ContributeGratitudeComponent', () => {
  let component: ContributeGratitudeComponent;
  let fixture: ComponentFixture<ContributeGratitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeGratitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeGratitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
