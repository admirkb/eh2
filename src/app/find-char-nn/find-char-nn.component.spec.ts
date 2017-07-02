import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharNNComponent } from './find-char-nn.component';

describe('FindCharNNComponent', () => {
  let component: FindCharNNComponent;
  let fixture: ComponentFixture<FindCharNNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCharNNComponent ]
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
});
