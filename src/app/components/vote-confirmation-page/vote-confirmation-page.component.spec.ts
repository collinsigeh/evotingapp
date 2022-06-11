import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteConfirmationPageComponent } from './vote-confirmation-page.component';

describe('VoteConfirmationPageComponent', () => {
  let component: VoteConfirmationPageComponent;
  let fixture: ComponentFixture<VoteConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteConfirmationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
