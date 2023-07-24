import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeToolbarComponent } from './large-toolbar.component';

describe('LargeToolbarComponent', () => {
  let component: LargeToolbarComponent;
  let fixture: ComponentFixture<LargeToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeToolbarComponent]
    });
    fixture = TestBed.createComponent(LargeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
