import { TestBed } from '@angular/core/testing';

import { BalanceResumeService } from './balance-resume.service';

describe('BalanceResumeService', () => {
  let service: BalanceResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
