import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLivroComponent } from './get-livro.component';

describe('GetLivroComponent', () => {
  let component: GetLivroComponent;
  let fixture: ComponentFixture<GetLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
