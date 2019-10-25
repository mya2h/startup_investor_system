import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreallComponent } from './exploreall.component';

describe('ExploreallComponent', () => {
  let component: ExploreallComponent;
  let fixture: ComponentFixture<ExploreallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
