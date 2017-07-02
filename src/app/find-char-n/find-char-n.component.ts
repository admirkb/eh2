import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'

@Component({
  selector: 'app-find-char-n',
  templateUrl: './find-char-n.component.html',
  styleUrls: ['./find-char-n.component.css']
})
export class FindCharNComponent implements OnInit {

  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }

  public find_char_N(string1, string2) {
    return this.commonMethodsService.find_char_N(string1, string2)
  }
}
