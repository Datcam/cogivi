import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCogiviComponent } from './start-cogivi.component';

describe('StartCogiviComponent', () => {
  let component: StartCogiviComponent;
  let fixture: ComponentFixture<StartCogiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCogiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCogiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
