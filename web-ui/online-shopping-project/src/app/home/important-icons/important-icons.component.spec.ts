import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantIconsComponent } from './important-icons.component';

describe('ImportantIconsComponent', () => {
  let component: ImportantIconsComponent;
  let fixture: ComponentFixture<ImportantIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantIconsComponent]
    });
    fixture = TestBed.createComponent(ImportantIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
