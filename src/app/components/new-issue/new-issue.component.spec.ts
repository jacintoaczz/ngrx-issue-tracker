import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIssueComponent } from './new-issue.component';

describe('NewIssueComponent', () => {
  let component: NewIssueComponent;
  let fixture: ComponentFixture<NewIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewIssueComponent]
    });
    fixture = TestBed.createComponent(NewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
