import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionResultPageComponent } from './election-result-page.component';

describe('ElectionResultPageComponent', () => {
  let component: ElectionResultPageComponent;
  let fixture: ComponentFixture<ElectionResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
