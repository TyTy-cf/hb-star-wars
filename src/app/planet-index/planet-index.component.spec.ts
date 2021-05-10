import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetIndexComponent } from './planet-index.component';

describe('PlanetIndexComponent', () => {
  let component: PlanetIndexComponent;
  let fixture: ComponentFixture<PlanetIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
