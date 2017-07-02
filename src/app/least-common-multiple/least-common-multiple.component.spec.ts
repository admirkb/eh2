import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastCommonMultipleComponent } from './least-common-multiple.component';

describe('LeastCommonMultipleComponent', () => {
  let component: LeastCommonMultipleComponent;
  let fixture: ComponentFixture<LeastCommonMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastCommonMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastCommonMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
