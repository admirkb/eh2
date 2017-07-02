import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateMethodComponent } from './rotate-method.component';
import { CommonMethodsService } from '../services/commonMethods'

describe('RotateMethodComponent', () => {
  let component: RotateMethodComponent;
  let fixture: ComponentFixture<RotateMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RotateMethodComponent],
      providers: [CommonMethodsService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('tests if rotate method shifts input by 2 using Array.prototype"', () => {

    let rotateInput = "1,2,3,4,5,6,7,8,9,10, 11, 12";
    let numericShift = 2;
    let rotateOutput = [];

    let temp = rotateInput.replace(/\s/g, '');
    let rotateInputTemp = temp.split(',').map(Number);

    let shift = numericShift;
    rotateOutput = component.getRotate(rotateInputTemp, shift);
    expect(rotateOutput).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]);
  });

  it('tests if rotate method shifts input by 2"', () => {

    let rotateInput = "1,2,3,4,5,6,7,8,9,10, 11, 12";
    let numericShift = 2;
    let rotateOutput = [];

    let temp = rotateInput.replace(/\s/g, '');
    let rotateInputTemp = temp.split(',').map(Number);

    let shift = numericShift;

    rotateOutput = component.getRotate2(rotateInputTemp, shift);
    expect(rotateOutput).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]);

  });

  it('tests if rotate method shifts input by 4"', () => {

    let rotateInput = "1,2,3,4,5,6,7,8,9,10, 11, 12";
    let numericShift = 4;
    let rotateOutput = [];

    let temp = rotateInput.replace(/\s/g, '');
    let rotateInputTemp = temp.split(',').map(Number);

    let shift = numericShift;

    rotateOutput = component.getRotate2(rotateInputTemp, shift);
    expect(rotateOutput).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]);

  });

  it('tests if rotate method shifts input by 4 using service call"', () => {

    let rotateInput = "1,2,3,4,5,6,7,8,9,10, 11, 12";
    let numericShift = 4;
    let rotateOutput = [];

    let temp = rotateInput.replace(/\s/g, '');
    let rotateInputTemp = temp.split(',').map(Number);

    let shift = numericShift;

    rotateOutput = component.getRotate3(rotateInputTemp, shift);
    expect(rotateOutput).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]);

  });

  it('tests if rotate method shifts Jade to the end"', () => {

    let rotateInput = "Jade, Elita, Giselle";
    let numericShift = 1;
    let rotateOutput = [];

    let temp = rotateInput.replace(/\s/g, '');
    let rotateInputTemp = temp.split(',').map(function (n) {
      return n.replace("\"", null);
    });

    let shift = numericShift;

    rotateOutput = component.getRotate3(rotateInputTemp, shift);
    expect(rotateOutput).toEqual(['Elita', 'Giselle', 'Jade']);

  });

});
