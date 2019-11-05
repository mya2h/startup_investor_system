import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationdropdownComponent } from './notificationdropdown.component';

describe('NotificationdropdownComponent', () => {
  let component: NotificationdropdownComponent;
  let fixture: ComponentFixture<NotificationdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
