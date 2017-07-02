import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'
@Component({
  selector: 'app-least-common-multiple',
  templateUrl: './least-common-multiple.component.html',
  styleUrls: ['./least-common-multiple.component.css']
})
export class LeastCommonMultipleComponent implements OnInit {

  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }

  public leastCommonMultiple(min, max) {
    return this.commonMethodsService.leastCommonMultiple(min, max)
  }
}
