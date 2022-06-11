import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinVerificationPageComponent } from './vin-verification-page.component';

describe('VinVerificationPageComponent', () => {
  let component: VinVerificationPageComponent;
  let fixture: ComponentFixture<VinVerificationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinVerificationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
