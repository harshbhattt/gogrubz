import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingYouComponent } from './everything-you.component';

describe('EverythingYouComponent', () => {
  let component: EverythingYouComponent;
  let fixture: ComponentFixture<EverythingYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EverythingYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
