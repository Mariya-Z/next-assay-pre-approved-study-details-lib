import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NextAssayPreApprovedStudyDetailsModule} from 'next-assay-pre-approved-study-details';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NextAssayPreApprovedStudyDetailsModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
