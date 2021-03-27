import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedResponseCheckComponent } from './linked-response-check.component';

describe('LinkedResponseCheckComponent', () => {
  let component: LinkedResponseCheckComponent;
  let fixture: ComponentFixture<LinkedResponseCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedResponseCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedResponseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
