import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCogivi3Component } from './start-cogivi3.component';

describe('StartCogivi3Component', () => {
  let component: StartCogivi3Component;
  let fixture: ComponentFixture<StartCogivi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCogivi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCogivi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
