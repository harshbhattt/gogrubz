import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheComponent } from './join-the.component';

describe('JoinTheComponent', () => {
  let component: JoinTheComponent;
  let fixture: ComponentFixture<JoinTheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinTheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
