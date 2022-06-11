import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionListPageComponent } from './election-list-page.component';

describe('ElectionListPageComponent', () => {
  let component: ElectionListPageComponent;
  let fixture: ComponentFixture<ElectionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
