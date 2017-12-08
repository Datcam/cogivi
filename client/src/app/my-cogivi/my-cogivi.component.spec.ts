import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCogiviComponent } from './my-cogivi.component';

describe('MyCogiviComponent', () => {
  let component: MyCogiviComponent;
  let fixture: ComponentFixture<MyCogiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCogiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCogiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
