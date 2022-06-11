import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintVerificationPageComponent } from './fingerprint-verification-page.component';

describe('FingerprintVerificationPageComponent', () => {
  let component: FingerprintVerificationPageComponent;
  let fixture: ComponentFixture<FingerprintVerificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FingerprintVerificationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
