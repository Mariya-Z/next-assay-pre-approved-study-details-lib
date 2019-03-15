import {StudyCrossoverDisplayPipe} from './study-crossover-display.pipe';
import {async, TestBed} from '@angular/core/testing';
import {STUDY_WIZARD_STRING_NA_VALUE} from '../study-customization/mock-data';


describe('Pipe: studyCrossoverDisplay', () => {
  let studyCrossoverDisplay: StudyCrossoverDisplayPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [StudyCrossoverDisplayPipe],
    });
  }));

  beforeEach(() => {
    studyCrossoverDisplay = TestBed.get(StudyCrossoverDisplayPipe);
  });

  it('pipe gets true and returns yes', () => {
    expect(studyCrossoverDisplay.transform(true)).toBe('yes');
  });

  it('pipe gets false and returns N/A', () => {
    expect(studyCrossoverDisplay.transform(false)).toBe(STUDY_WIZARD_STRING_NA_VALUE);
  });

  it('pipe gets not bool values and returns them', () => {
    expect(studyCrossoverDisplay.transform(null)).toBe(null);
    expect(studyCrossoverDisplay.transform('string')).toBe('string');
    expect(studyCrossoverDisplay.transform(123)).toBe(123);
  });
});
