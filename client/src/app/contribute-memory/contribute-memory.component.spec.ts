import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeMemoryComponent } from './contribute-memory.component';

describe('ContributeMemoryComponent', () => {
  let component: ContributeMemoryComponent;
  let fixture: ComponentFixture<ContributeMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
