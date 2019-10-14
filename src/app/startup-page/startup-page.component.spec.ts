import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupPageComponent } from './startup-page.component';

describe('StartupPageComponent', () => {
  let component: StartupPageComponent;
  let fixture: ComponentFixture<StartupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
