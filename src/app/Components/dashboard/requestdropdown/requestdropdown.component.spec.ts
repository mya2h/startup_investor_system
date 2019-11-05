import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdropdownComponent } from './requestdropdown.component';

describe('RequestdropdownComponent', () => {
  let component: RequestdropdownComponent;
  let fixture: ComponentFixture<RequestdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
