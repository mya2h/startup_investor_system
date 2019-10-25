import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsInboxComponent } from './startups-inbox.component';

describe('StartupsInboxComponent', () => {
  let component: StartupsInboxComponent;
  let fixture: ComponentFixture<StartupsInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
