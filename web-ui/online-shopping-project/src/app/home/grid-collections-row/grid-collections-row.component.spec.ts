import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCollectionsRowComponent } from './grid-collections-row.component';

describe('GridCollectionsRowComponent', () => {
  let component: GridCollectionsRowComponent;
  let fixture: ComponentFixture<GridCollectionsRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCollectionsRowComponent]
    });
    fixture = TestBed.createComponent(GridCollectionsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
