import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsHomeComponent } from './startups-home.component';

describe('StartupsHomeComponent', () => {
  let component: StartupsHomeComponent;
  let fixture: ComponentFixture<StartupsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
