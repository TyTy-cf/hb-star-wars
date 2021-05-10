import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipFactionComponent } from './starship-faction.component';

describe('StarshipFactionComponent', () => {
  let component: StarshipFactionComponent;
  let fixture: ComponentFixture<StarshipFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
