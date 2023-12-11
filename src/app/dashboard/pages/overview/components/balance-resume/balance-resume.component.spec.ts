import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceResumeComponent } from './balance-resume.component';

describe('BalanceResumeComponent', () => {
  let component: BalanceResumeComponent;
  let fixture: ComponentFixture<BalanceResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
