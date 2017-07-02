import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharNComponent } from './find-char-n.component';
import { CommonMethodsService } from '../services/commonMethods'

describe('FindCharNComponent', () => {
  let component: FindCharNComponent;
  let fixture: ComponentFixture<FindCharNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindCharNComponent],
      providers: [CommonMethodsService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCharNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('tests find_char_N with order = n"', () => {


    let findCharsNInput1 = "Luton";
    let findCharsNInput2 = "Liverpool";
    let findCharsNOutput = "";

    findCharsNInput1 = findCharsNInput1.replace(/\s/g, '');
    findCharsNInput2 = findCharsNInput2.replace(/\s/g, '');

    var res = component.find_char_N(findCharsNInput1, findCharsNInput2);
    findCharsNOutput = res;
    expect(findCharsNOutput).toEqual('Lo');


  });








});
