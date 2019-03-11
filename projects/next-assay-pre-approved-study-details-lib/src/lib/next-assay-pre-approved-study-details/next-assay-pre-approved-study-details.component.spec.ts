import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextAssayPreApprovedStudyDetailsComponent } from './next-assay-pre-approved-study-details.component';

describe('NextAssayPreApprovedStudyDetailsComponent', () => {
  let component: NextAssayPreApprovedStudyDetailsComponent;
  let fixture: ComponentFixture<NextAssayPreApprovedStudyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextAssayPreApprovedStudyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextAssayPreApprovedStudyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
