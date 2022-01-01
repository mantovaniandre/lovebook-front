import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionBooksComponent } from './edition-books.component';

describe('EditionBooksComponent', () => {
  let component: EditionBooksComponent;
  let fixture: ComponentFixture<EditionBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
