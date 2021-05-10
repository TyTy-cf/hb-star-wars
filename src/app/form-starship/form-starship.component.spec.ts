import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStarshipComponent } from './form-starship.component';

describe('FormStarshipComponent', () => {
  let component: FormStarshipComponent;
  let fixture: ComponentFixture<FormStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
