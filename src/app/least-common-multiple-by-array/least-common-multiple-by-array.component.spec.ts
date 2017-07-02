import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastCommonMultipleByArrayComponent } from './least-common-multiple-by-array.component';

describe('LeastCommonMultipleByArrayComponent', () => {
  let component: LeastCommonMultipleByArrayComponent;
  let fixture: ComponentFixture<LeastCommonMultipleByArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastCommonMultipleByArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastCommonMultipleByArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
