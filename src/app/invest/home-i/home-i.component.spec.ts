import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIComponent } from './home-i.component';

describe('HomeIComponent', () => {
  let component: HomeIComponent;
  let fixture: ComponentFixture<HomeIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
