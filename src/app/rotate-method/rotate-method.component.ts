Array.prototype['rotate'] = function (array, n) {
  return array.slice(n, array.length).concat(array.slice(0, n));
}
import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'

@Component({
  selector: 'app-rotate-method',
  templateUrl: './rotate-method.component.html',
  styleUrls: ['./rotate-method.component.css']
})
export class RotateMethodComponent implements OnInit {


  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }
  public getRotate(array, n) { return new Array()['rotate'](array, n); }
  public getRotate2(array, n) { return array.slice(n, array.length).concat(array.slice(0, n)); }
  public getRotate3(array, n) {
    return this.commonMethodsService.getRotate(array, n)
  }

}
