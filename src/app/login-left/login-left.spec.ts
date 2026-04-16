import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeft } from './login-left';

describe('LoginLeft', () => {
  let component: LoginLeft;
  let fixture: ComponentFixture<LoginLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLeft);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
