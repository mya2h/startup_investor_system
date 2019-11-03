import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestordetailComponent } from './investordetail.component';

describe('InvestordetailComponent', () => {
  let component: InvestordetailComponent;
  let fixture: ComponentFixture<InvestordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
