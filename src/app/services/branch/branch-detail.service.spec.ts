import { TestBed } from '@angular/core/testing';

import { BranchDetailService } from './branch-detail.service';

describe('BranchDetailService', () => {
  let service: BranchDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
