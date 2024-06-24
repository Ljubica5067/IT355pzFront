import { TestBed } from '@angular/core/testing';

import { RepertoarService } from './repertoar.service';

describe('RepertoarService', () => {
  let service: RepertoarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepertoarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
