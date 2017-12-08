import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributePortraitComponent } from './contribute-portrait.component';

describe('ContributePortraitComponent', () => {
  let component: ContributePortraitComponent;
  let fixture: ComponentFixture<ContributePortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributePortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributePortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
