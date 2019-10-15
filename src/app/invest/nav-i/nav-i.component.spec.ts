import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavIComponent } from './nav-i.component';

describe('NavIComponent', () => {
  let component: NavIComponent;
  let fixture: ComponentFixture<NavIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
