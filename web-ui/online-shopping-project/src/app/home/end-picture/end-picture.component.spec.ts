import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPictureComponent } from './end-picture.component';

describe('EndPictureComponent', () => {
  let component: EndPictureComponent;
  let fixture: ComponentFixture<EndPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndPictureComponent]
    });
    fixture = TestBed.createComponent(EndPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
