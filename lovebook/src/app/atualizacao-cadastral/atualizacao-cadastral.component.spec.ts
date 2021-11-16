import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoCadastralComponent } from './atualizacao-cadastral.component';

describe('AtualizacaoCadastralComponent', () => {
  let component: AtualizacaoCadastralComponent;
  let fixture: ComponentFixture<AtualizacaoCadastralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizacaoCadastralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoCadastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
