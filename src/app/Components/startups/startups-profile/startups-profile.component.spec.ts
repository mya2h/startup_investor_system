import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsProfileComponent } from './startups-profile.component';

describe('StartupsProfileComponent', () => {
  let component: StartupsProfileComponent;
  let fixture: ComponentFixture<StartupsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
