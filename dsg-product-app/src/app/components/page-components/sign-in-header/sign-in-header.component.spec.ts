import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInHeaderComponent } from './sign-in-header.component';

describe('SignInHeaderComponent', () => {
  let component: SignInHeaderComponent;
  let fixture: ComponentFixture<SignInHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
