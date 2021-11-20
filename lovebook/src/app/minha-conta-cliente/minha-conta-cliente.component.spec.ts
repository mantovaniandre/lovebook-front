import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaClienteComponent } from './minha-conta-cliente.component';

describe('MinhaContaClienteComponent', () => {
  let component: MinhaContaClienteComponent;
  let fixture: ComponentFixture<MinhaContaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaContaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
