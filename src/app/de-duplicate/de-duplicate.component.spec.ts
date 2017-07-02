import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeDuplicateComponent } from './de-duplicate.component';
import { CommonMethodsService } from '../services/commonMethods'

describe('DeDuplicateComponent', () => {
  let component: DeDuplicateComponent;
  let fixture: ComponentFixture<DeDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeDuplicateComponent],
      providers: [CommonMethodsService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('tests removal of duplicate number in an array', () => {


    let deDupIn = "1, 3, 7, 7, 8, 9, 9, 9, 10, 11,11,12,11";
    let deDupOut = "";

    let temp = deDupIn.replace(/\s/g, '');
    let deDupInTemp = temp.split(',').map(Number);

    let res = component.getDeDuplicate(deDupInTemp);
    deDupOut = res;

    expect(deDupOut).toEqual([1, 3, 7, 8, 9, 10, 11, 12]);


  });


});
