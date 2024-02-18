import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGoOutComponent } from './why-go-out.component';

describe('WhyGoOutComponent', () => {
  let component: WhyGoOutComponent;
  let fixture: ComponentFixture<WhyGoOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyGoOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyGoOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
