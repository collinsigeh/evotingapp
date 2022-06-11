import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToMonitorElectionsPageComponent } from './how-to-monitor-elections-page.component';

describe('HowToMonitorElectionsPageComponent', () => {
  let component: HowToMonitorElectionsPageComponent;
  let fixture: ComponentFixture<HowToMonitorElectionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToMonitorElectionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToMonitorElectionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
