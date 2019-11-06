import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestedProjectDetailComponent } from './invested-project-detail.component';

describe('InvestedProjectDetailComponent', () => {
  let component: InvestedProjectDetailComponent;
  let fixture: ComponentFixture<InvestedProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestedProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestedProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
