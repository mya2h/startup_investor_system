import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreIComponent } from './explore-i.component';

describe('ExploreIComponent', () => {
  let component: ExploreIComponent;
  let fixture: ComponentFixture<ExploreIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
