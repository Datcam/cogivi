import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeAppComponent } from './contribute-app.component';

describe('ContributeAppComponent', () => {
  let component: ContributeAppComponent;
  let fixture: ComponentFixture<ContributeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
