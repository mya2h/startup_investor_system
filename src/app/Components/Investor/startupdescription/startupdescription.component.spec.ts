import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupdescriptionComponent } from './startupdescription.component';

describe('StartupdescriptionComponent', () => {
  let component: StartupdescriptionComponent;
  let fixture: ComponentFixture<StartupdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
