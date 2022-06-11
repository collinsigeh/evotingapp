import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectableOfficesPageComponent } from './electable-offices-page.component';

describe('ElectableOfficesPageComponent', () => {
  let component: ElectableOfficesPageComponent;
  let fixture: ComponentFixture<ElectableOfficesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectableOfficesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectableOfficesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
