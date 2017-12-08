import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CogiviDashboardComponent } from './cogivi-dashboard.component';

describe('CogiviDashboardComponent', () => {
  let component: CogiviDashboardComponent;
  let fixture: ComponentFixture<CogiviDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CogiviDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CogiviDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
