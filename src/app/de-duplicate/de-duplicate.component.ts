import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'

@Component({
  selector: 'app-de-duplicate',
  templateUrl: './de-duplicate.component.html',
  styleUrls: ['./de-duplicate.component.css']
})
export class DeDuplicateComponent implements OnInit {

  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }

  public getDeDuplicate(arg) {
    return this.commonMethodsService.getDeDuplicate(arg)
  }
}
