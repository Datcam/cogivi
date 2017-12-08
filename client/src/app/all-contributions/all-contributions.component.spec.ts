import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContributionsComponent } from './all-contributions.component';

describe('AllContributionsComponent', () => {
  let component: AllContributionsComponent;
  let fixture: ComponentFixture<AllContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
