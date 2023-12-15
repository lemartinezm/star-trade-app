import { TestBed } from '@angular/core/testing';

import { TransactionsResumeService } from './transactions-resume.service';

describe('TransactionsResumeService', () => {
  let service: TransactionsResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
