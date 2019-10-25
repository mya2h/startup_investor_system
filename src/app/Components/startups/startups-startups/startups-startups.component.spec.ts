import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsStartupsComponent } from './startups-startups.component';

describe('StartupsStartupsComponent', () => {
  let component: StartupsStartupsComponent;
  let fixture: ComponentFixture<StartupsStartupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsStartupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsStartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
