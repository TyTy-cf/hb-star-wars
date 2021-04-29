import { TestBed } from '@angular/core/testing';

import { AbstractAttributesService } from './abstract-attributes.service';

describe('AbstractAttributesService', () => {
  let service: AbstractAttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractAttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
