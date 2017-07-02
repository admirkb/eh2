import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharNComponent } from './find-char-n.component';

describe('FindCharNComponent', () => {
  let component: FindCharNComponent;
  let fixture: ComponentFixture<FindCharNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCharNComponent ]
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
});
