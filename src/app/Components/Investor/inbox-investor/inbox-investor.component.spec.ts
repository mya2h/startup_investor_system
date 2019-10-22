import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxInvestorComponent } from './inbox-investor.component';

describe('InboxInvestorComponent', () => {
  let component: InboxInvestorComponent;
  let fixture: ComponentFixture<InboxInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
