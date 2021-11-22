import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountClientComponent } from './account-client';

describe('MinhaContaClienteComponent', () => {
  let component: AccountClientComponent;
  let fixture: ComponentFixture<AccountClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
