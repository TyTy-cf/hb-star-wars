import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactionComponent } from './form-faction.component';

describe('FormFactionComponent', () => {
  let component: FormFactionComponent;
  let fixture: ComponentFixture<FormFactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
