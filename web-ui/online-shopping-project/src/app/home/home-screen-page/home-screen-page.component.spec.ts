import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenPageComponent } from './home-screen-page.component';

describe('HomeScreenPageComponent', () => {
  let component: HomeScreenPageComponent;
  let fixture: ComponentFixture<HomeScreenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScreenPageComponent]
    });
    fixture = TestBed.createComponent(HomeScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
