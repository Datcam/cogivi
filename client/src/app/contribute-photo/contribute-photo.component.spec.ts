import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributePhotoComponent } from './contribute-photo.component';

describe('ContributePhotoComponent', () => {
  let component: ContributePhotoComponent;
  let fixture: ComponentFixture<ContributePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
