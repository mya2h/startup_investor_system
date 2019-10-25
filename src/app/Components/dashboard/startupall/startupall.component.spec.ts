import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupallComponent } from './startupall.component';

describe('StartupallComponent', () => {
  let component: StartupallComponent;
  let fixture: ComponentFixture<StartupallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
