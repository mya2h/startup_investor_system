import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsExploreComponent } from './startups-explore.component';

describe('StartupsExploreComponent', () => {
  let component: StartupsExploreComponent;
  let fixture: ComponentFixture<StartupsExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
