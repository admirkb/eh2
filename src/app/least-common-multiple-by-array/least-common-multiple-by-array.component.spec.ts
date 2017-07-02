import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastCommonMultipleByArrayComponent } from './least-common-multiple-by-array.component';
import { CommonMethodsService } from '../services/commonMethods'
describe('LeastCommonMultipleByArrayComponent', () => {
  let component: LeastCommonMultipleByArrayComponent;
  let fixture: ComponentFixture<LeastCommonMultipleByArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeastCommonMultipleByArrayComponent],
      providers: [CommonMethodsService],
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

  it('tests getLeastCommonMultipleByArray with array of integers', () => {


    let leastCommonMultipleArray = "3,4,7";
    let leastCommonMultipleArrayOutput;

    var temp = leastCommonMultipleArray.replace(/\s/g, '');
    var leastCommonMultipleArrayTemp = temp.split(',');

    let res = component.leastCommonMultipleByArray(leastCommonMultipleArrayTemp);
    leastCommonMultipleArrayOutput = res;

    expect(leastCommonMultipleArrayOutput).toEqual(84);


  });
});
