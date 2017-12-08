import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCogivi2Component } from './start-cogivi2.component';

describe('StartCogivi2Component', () => {
  let component: StartCogivi2Component;
  let fixture: ComponentFixture<StartCogivi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCogivi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCogivi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
