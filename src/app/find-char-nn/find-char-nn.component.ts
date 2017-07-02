import { Component, OnInit } from '@angular/core';
import { CommonMethodsService } from '../services/commonMethods'
@Component({
  selector: 'app-find-char-nn',
  templateUrl: './find-char-nn.component.html',
  styleUrls: ['./find-char-nn.component.css']
})
export class FindCharNNComponent implements OnInit {

  constructor(private commonMethodsService: CommonMethodsService) { }

  ngOnInit() {
  }

  public find_char_NN(string1, string2) {
    return this.commonMethodsService.find_char_NN(string1, string2)
  }
}
