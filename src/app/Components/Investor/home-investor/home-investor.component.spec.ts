import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvestorComponent } from './home-investor.component';

describe('HomeInvestorComponent', () => {
  let component: HomeInvestorComponent;
  let fixture: ComponentFixture<HomeInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
