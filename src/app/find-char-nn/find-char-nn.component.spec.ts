import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharNNComponent } from './find-char-nn.component';
import { CommonMethodsService } from '../services/commonMethods'

describe('FindCharNNComponent', () => {
  let component: FindCharNNComponent;
  let fixture: ComponentFixture<FindCharNNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindCharNNComponent],
      providers: [CommonMethodsService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCharNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

    it('tests find_char_NN with order = n*n"', () => {


    let findCharsNNInput1  = "Luton";
    let findCharsNNInput2  = "Wimbledon";
    let findCharsNNOutput  = "";


    findCharsNNInput1 = findCharsNNInput1.replace(/\s/g, '');
    findCharsNNInput2 = findCharsNNInput2.replace(/\s/g, '');

    var res = component.find_char_NN(findCharsNNInput1, findCharsNNInput2);
    findCharsNNOutput = res;
    expect(findCharsNNOutput).toEqual('on');


  });
});
