import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionResumeComponent } from './transaction-resume.component';

describe('TransactionResumeComponent', () => {
  let component: TransactionResumeComponent;
  let fixture: ComponentFixture<TransactionResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
