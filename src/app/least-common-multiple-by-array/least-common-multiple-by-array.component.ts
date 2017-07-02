import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'
@Component({
  selector: 'app-least-common-multiple-by-array',
  templateUrl: './least-common-multiple-by-array.component.html',
  styleUrls: ['./least-common-multiple-by-array.component.css']
})
export class LeastCommonMultipleByArrayComponent implements OnInit {

  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }


  public leastCommonMultipleByArray(array) {
    return this.commonMethodsService.leastCommonMultipleByArray(array)
  }
}
