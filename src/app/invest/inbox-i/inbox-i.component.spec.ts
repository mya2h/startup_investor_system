import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxIComponent } from './inbox-i.component';

describe('InboxIComponent', () => {
  let component: InboxIComponent;
  let fixture: ComponentFixture<InboxIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
