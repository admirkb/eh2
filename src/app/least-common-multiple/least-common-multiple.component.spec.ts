import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastCommonMultipleComponent } from './least-common-multiple.component';
import { CommonMethodsService } from '../services/commonMethods'

describe('LeastCommonMultipleComponent', () => {
  let component: LeastCommonMultipleComponent;
  let fixture: ComponentFixture<LeastCommonMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeastCommonMultipleComponent],
      providers: [CommonMethodsService],
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

  it('tests getLeastCommonMultiple by range of integers', () => {


    let leastCommonMultipleMin = 1;
    let leastCommonMultipleMax = 13;
    let leastCommonMultipleMaxOutput = "";

    var res = component.leastCommonMultiple(leastCommonMultipleMin, leastCommonMultipleMax);
    leastCommonMultipleMaxOutput = res;
    expect(leastCommonMultipleMaxOutput).toEqual(360360);


  });
});
