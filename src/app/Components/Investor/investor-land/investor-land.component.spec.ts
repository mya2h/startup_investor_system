import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorLandComponent } from './investor-land.component';

describe('InvestorLandComponent', () => {
  let component: InvestorLandComponent;
  let fixture: ComponentFixture<InvestorLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
