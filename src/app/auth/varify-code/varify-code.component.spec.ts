import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyCodeComponent } from './varify-code.component';

describe('VarifyCodeComponent', () => {
  let component: VarifyCodeComponent;
  let fixture: ComponentFixture<VarifyCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarifyCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarifyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
