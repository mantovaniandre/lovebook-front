import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling3Component } from './sibling3.component';

describe('Sibling3Component', () => {
  let component: Sibling3Component;
  let fixture: ComponentFixture<Sibling3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibling3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibling3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
